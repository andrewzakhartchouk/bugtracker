from rest_framework import serializers

from . import user, stage, task
from .. import models

class CreateProjectSerializer(serializers.ModelSerializer):
    project_lead = serializers.PrimaryKeyRelatedField(queryset=models.User.objects.all(), required=False, write_only=True, many=True)
    members = serializers.PrimaryKeyRelatedField(queryset=models.User.objects.all(), required=False, write_only=True, many=True)
    team = serializers.PrimaryKeyRelatedField(queryset=models.Team.objects.all())
    
    class Meta:
        model = models.Project
        fields = [
            "team",
            "name",
            "project_lead",
            "members",
        ]
    def create(self, validated_data):
        project_lead = validated_data.pop("project_lead", [])
        members = validated_data.pop("members", [])
        project = models.Project(**validated_data)
        project.save()
        for l in project_lead:
            project.project_members.add(l, through_defaults={"project_lead": True})
        for m in members:
            project.project_members.add(m)
        return project
    
    def update(self, instance, validated_data):
        project_lead = validated_data.pop("project_lead", [])
        members = validated_data.pop("members", [])
        print("UPDATE", validated_data)
        fields = ["team", "name"]
        for f in fields:
            try:
                setattr(instance, f, validated_data[f])
            except KeyError:
                pass
        instance.save()
        return instance
        
class ListProjectSerializer(serializers.ModelSerializer):
    team = user.UserSerializer(source='project_members', read_only=True, many=True)
    stages = stage.StageTagSerializer(source='stage_set', read_only=True, many=True)
    tasks = task.ListTaskSerializer(source='task_set', read_only=True, many=True)
    
    class Meta:
        model = models.Project
        fields = [
            "id",
            "name",
            "team",
            "stages",
            "tasks",
        ]
        read_only_fields = ["team", "stages", "tasks"]