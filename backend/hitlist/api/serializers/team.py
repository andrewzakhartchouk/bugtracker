from rest_framework import serializers

from . import user, project
from .. import models

class TeamSerializer(serializers.ModelSerializer):
    members = user.UserSerializer(source='team_members', read_only=True, many=True)
    projects = project.BasicProjectSerializer(source='project_set', read_only=True, many=True)
    
    class Meta:
        model = models.Team
        fields = [
            "id",
            "name",
            "members",
            "projects",
        ]
        
class TeamTagSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Team
        fields = [
            "id",
            "name",
        ]