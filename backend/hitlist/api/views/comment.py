from rest_framework import generics

from .. import models, serializers

class CommentCreateAPIView(generics.CreateAPIView):
    queryset = models.Comment.objects.all().order_by("-created_at")
    serializer_class = serializers.comment.CommentSerializer
        
comment_create_view = CommentCreateAPIView.as_view()