from rest_framework import serializers

from api.models import assigned_member

from . import task, project, user
from .. import models

class DashboardSerializer(serializers.ModelSerializer):
    tasks = serializers.SerializerMethodField(read_only=True)
    projects = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = models.User
        fields = [
            'name',
            'tasks',
            "projects"
        ]
        
    def get_tasks(self, obj):
        qs = models.Task.objects.all().filter(assignedmember=obj.id).order_by("end_at")[:10]
        return task.ListTaskSerializer(qs, many=True).data
    
    def get_projects(self, obj):
        teams = obj.teams.all()
        qs = models.Project.objects.all().filter(team__in=teams).order_by("pk")[:10]
        return project.ProjectSerializer(qs, many=True).data