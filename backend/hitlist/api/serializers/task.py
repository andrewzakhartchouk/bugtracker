from rest_framework import serializers

from . import stage
from .. import models

class ListTaskSerializer(serializers.ModelSerializer):
    stage = stage.StageTagSerializer(read_only=True)
    comments = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = models.Task
        fields = [
            "project",
            "stage",
            "priority",
            "end_at",
            "stage",
            "tags",
            "name",
            "comments",
            "checked"
        ]
        
    def get_comments(self, obj):
        return obj.comment_set.count()