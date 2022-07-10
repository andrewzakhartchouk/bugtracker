from django.dispatch import receiver
from rest_framework import serializers

from . import stage, comment, assigned_member
from .. import models

class ListTaskSerializer(serializers.ModelSerializer):
    stage = stage.StageTagSerializer(read_only=True)
    project = serializers.SerializerMethodField()
    
    class Meta:
        model = models.Task
        fields = [
            "id",
            "project",
            "stage",
            "priority",
            "end_at",
            "stage",
            "tags",
            "name",
            "comment_count",
            "checked"
        ]
        
    def get_project(self, obj):
        """
        To avoid running into circular import errors with .project, opting for this method.
        """
        from . import project

        projectObj = obj.project
        return project.BasicProjectSerializer(projectObj).data

class TaskSerializer(serializers.ModelSerializer):
    project = serializers.SerializerMethodField()
    stage = stage.StageTagSerializer()
    assigned_members = assigned_member.AssignedMemberSerializer(source="assignedmember_set", required=False, many=True, read_only=True)
    comments = comment.CommentSerializer(source="comment_set", many=True, read_only=True)
    checked = serializers.ReadOnlyField()
    
    class Meta:
        model = models.Task
        fields = [
            "id",
            "project",
            "stage",
            "name",
            "priority",
            "tags",
            "start_at",
            "end_at",
            "description",
            "checked",
            "comments",
            "assigned_members",
        ]

    def get_project(self, obj):
        """
        To avoid running into circular import errors with .project, opting for this method.
        """
        from . import project

        return project.BasicProjectSerializer(obj.project).data

class UpdateTaskSerializer(serializers.ModelSerializer):
    project = serializers.PrimaryKeyRelatedField(queryset=models.Project.objects.all())
    assigned = assigned_member.AssignedMemberSerializer(source="assignedmember_set", required=False, many=True, read_only=True)
    assigned_members = serializers.PrimaryKeyRelatedField(queryset=models.User.objects.all(), required=False, write_only=True, many=True)
    comments = comment.CommentSerializer(source="comment_set", many=True, read_only=True)
    submitted_by = serializers.HiddenField(default=serializers.CreateOnlyDefault(serializers.CurrentUserDefault()))
    checked = serializers.ReadOnlyField()
    
    class Meta:
        model = models.Task
        fields = [
            "project",
            "stage",
            "name",
            "priority",
            "tags",
            "start_at",
            "end_at",
            "description",
            "checked",
            "comments",
            "assigned",
            "assigned_members",
            "submitted_by",
        ]

    def validate_project(self, value):
        request = self.context.get('request')
        user = request.user
        teams = user.teams.all()
        if (value.team not in teams):
            raise serializers.ValidationError('You do not have the permissions for this project.')
        return value

    def validate(self, data):
        validation_errors = {}
        selected_project = data.get('project')
        selected_stage = data.get('stage')
        if selected_stage.project != selected_project:
            validation_errors['stage'] = 'Please specify a stage within the selected project.'

        team = selected_project.team
        assigned = data.get('assigned_members')
        if assigned:
            invalid_users = []
            for user in assigned:
                if team not in user.teams.all():
                    invalid_users.append(user.name)
            if invalid_users:
                error_users = ', '.join(invalid_users)
                link_verb = 'is' if len(invalid_users) < 2 else 'are'
                validation_errors['assigned_members'] = f'{error_users} {link_verb} not assigned to this project\'s team.'

        if validation_errors:
            raise serializers.ValidationError(validation_errors)
        return data

    def create_task_updated_activity(self):
        pass

    def create(self, validated_data):
        task = models.Task(**validated_data)
        task.save()

        if task.assigned_members.all():
            for assigned in task.assigned_members:
                if self.context.get('request').user == assigned: continue
                activity = models.Activity(
                    project=task.project,
                    task=task,
                    sender=task.submitted_by,
                    receiver=assigned,
                    message_format=models.Activity.Format.TASK_ASSIGNED
                )
                activity.save()

        return task
        
    def update(self, instance, validated_data):
        instance_members = instance.assigned_members.all()
        updated_members = validated_data.get('assigned_members')

        if instance_members and updated_members:
            new_members = [member for member in updated_members if member not in instance_members]
            # removed_members = [member for member in instance_members if member not in updated_members]

            for new_member in new_members:
                if self.context.get('request').user == new_member: continue
                activity = models.Activity(
                    project=instance.project,
                    task=instance,
                    sender=instance.submitted_by,
                    receiver=new_member,
                    message_format=models.Activity.Format.TASK_ASSIGNED
                )
                activity.save()

        new_instance = super().update(instance, validated_data)

        if updated_members and new_members:
            existing_members = [member for member in updated_members if member not in new_members]
            for assigned in existing_members:
                if self.context.get('request').user == assigned: continue
                activity = models.Activity(
                    project=instance.project,
                    task=new_instance,
                    sender=instance.submitted_by,
                    receiver=assigned,
                    message_format=models.Activity.Format.TASK_UPDATED
                )
                activity.save()

        return new_instance