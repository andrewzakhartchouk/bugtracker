from rest_framework import serializers

from .. import models

class CommentSerializer(serializers.ModelSerializer):
    task = serializers.PrimaryKeyRelatedField(queryset=models.Task.objects.all(), write_only=True)

    class Meta:
        model = models.Comment
        fields = [
            "id",
            "comment",
            "created_at",
            "task",
        ]

