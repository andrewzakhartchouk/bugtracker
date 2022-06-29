from rest_framework import serializers

from .. import models

class CommentSerializer(serializers.ModelSerializer):
    task = serializers.PrimaryKeyRelatedField(queryset=models.Task.objects.all(), write_only=True)
    user = serializers.HiddenField(default=serializers.CreateOnlyDefault(serializers.CurrentUserDefault()))

    class Meta:
        model = models.Comment
        fields = [
            "id",
            "user",
            "comment",
            "created_at",
            "task",
        ]

