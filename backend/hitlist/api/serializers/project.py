from rest_framework import serializers

from . import stage, task, project_member, team
from .. import models

class ProjectSerializer(serializers.ModelSerializer):

    members = project_member.ProjectMemberSerializer(source='projectmember_set', read_only=True, many=True)
    stages = stage.StageTagSerializer(source='stage_set', read_only=True, many=True)
    team = team.TeamTagSerializer()

    class Meta:
        model = models.Project
        fields = [
            "id",
            "name",
            "team",
            "members",
            "stages",
        ]
        
class BasicProjectSerializer(serializers.ModelSerializer):
    stages = stage.StageTagSerializer(source='stage_set', read_only=True, many=True)
    members = project_member.ProjectMemberSerializer(source="projectmember_set", required=False, many=True, read_only=True)

    class Meta:
        model = models.Project
        fields = [
            "id",
            "name",
            "stages",
            "members",
        ]

class CreateProjectSerializer(serializers.ModelSerializer):
    project_lead = serializers.PrimaryKeyRelatedField(queryset=models.User.objects.all(), required=False, write_only=True, many=True)
    members = serializers.PrimaryKeyRelatedField(queryset=models.User.objects.all(), required=False, write_only=True, many=True)
    team = serializers.PrimaryKeyRelatedField(read_only=True)
    team_name = serializers.ReadOnlyField(source="team.name")
    
    class Meta:
        model = models.Project
        fields = [
            "team",
            "team_name",
            "name",
            "project_lead",
            "members",
        ]
        
    def update_members(self, obj, project_lead, members):
        for l in project_lead:
            obj.project_members.add(l, through_defaults={"project_lead": True})
        for m in members:
            obj.project_members.add(m)   
        
    def create(self, validated_data):
        project_lead = validated_data.pop("project_lead", [])
        members = validated_data.pop("members", [])
        project = models.Project(**validated_data)
        project.save()
        self.update_members(project, project_lead, members)
        return project
    
    def update(self, instance, validated_data):
        project_lead = validated_data.pop("project_lead", [])
        members = validated_data.pop("members", [])
        instance.project_members.clear()
        self.update_members(instance, project_lead, members)
        fields = ["team", "name"]
        for f in fields:
            try:
                setattr(instance, f, validated_data[f])
            except KeyError:
                pass
        instance.save()
        return instance
        
class ListProjectSerializer(serializers.ModelSerializer):
    members = project_member.ProjectMemberSerializer(source='projectmember_set', read_only=True, many=True)
    stages = stage.StageTagSerializer(source='stage_set', read_only=True, many=True)
    tasks = task.ListTaskSerializer(source='task_set', read_only=True, many=True)
    team = serializers.ReadOnlyField(source="team.name")
    
    class Meta:
        model = models.Project
        fields = [
            "id",
            "name",
            "team",
            "members",
            "stages",
            "tasks",
        ]
        depth = 1