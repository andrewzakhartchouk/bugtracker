from rest_framework import generics

from .. import models, serializers

class ProjectCreateAPIView(generics.CreateAPIView):
    queryset = models.Project.objects.all()
    serializer_class = serializers.comment.CommentSerializer
        
comment_create_view = ProjectCreateAPIView.as_view()