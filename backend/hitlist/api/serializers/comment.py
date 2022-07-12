from rest_framework import serializers

from . import user
from .. import models

class CommentSerializer(serializers.ModelSerializer):
    task = serializers.PrimaryKeyRelatedField(queryset=models.Task.objects.all(), write_only=True)
    user = user.UserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = [
            "id",
            "user",
            "comment",
            "created_at",
            "task",
        ]

    def create(self, validated_data):
        request = self.context.get('request')
        comment = models.Comment(**validated_data, user=request.user)
        comment.save()
        for member in comment.task.assigned_members.all():
            if self.context.get('request').user == member: continue
            activity = models.Activity(
                project=comment.task.project,
                task=comment.task,
                sender=comment.user,
                receiver=member,
                message_format=models.Activity.Format.COMMENT
            )
            activity.save()

        return comment

    

