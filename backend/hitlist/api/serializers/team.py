from rest_framework import serializers

from . import user
from .. import models
        
class TeamTagSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Team
        fields = [
            "id",
            "name",
        ]

class TeamSerializer(serializers.ModelSerializer):
    members = user.UserSerializer(source='team_members', read_only=True, many=True)
    projects = serializers.SerializerMethodField()
    
    class Meta:
        model = models.Team
        fields = [
            "id",
            "name",
            "members",
            "projects",
        ]

    def get_projects(self, obj):
        """
        To avoid running into circular import errors with .project, opting for this method.
        """
        from . import project

        projects = obj.project_set.all()
        return project.BasicProjectSerializer(projects ,many=True).data