from rest_framework import generics, permissions

from .. import models, serializers

class RegisterUserView(generics.CreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.RegisterUserSerializer
    permission_classes = [permissions.AllowAny]

register_user_view = RegisterUserView.as_view()