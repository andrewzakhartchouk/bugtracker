from rest_framework import generics

from .. import models, serializers

class CreateInviteAPIView(generics.CreateAPIView):
    queryset = models.Invite.objects.all()
    serializer_class = serializers.invite.InviteSerializer
        
invite_create_view = CreateInviteAPIView.as_view()