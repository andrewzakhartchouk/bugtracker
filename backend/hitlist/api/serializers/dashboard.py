from rest_framework import serializers

from api.models import assigned_member

from . import task, project, user
from .. import models

class DashboardSerializer(serializers.ModelSerializer):
    projects = serializers.SerializerMethodField(read_only=True)
    tasks = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = models.User
        fields = [
            'name',
            "projects",
            'tasks',
        ]
        
    def get_tasks(self, obj):
        qs = models.Task.objects.all().filter(assigned_members__id=obj.id).order_by("end_at")
        return task.ListTaskSerializer(qs, many=True).data
    
    def get_projects(self, obj):
        teams = obj.teams.all()
        qs = models.Project.objects.all().filter(team__in=teams).order_by("pk")
        return project.ProjectSerializer(qs, many=True).data