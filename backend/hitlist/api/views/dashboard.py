from rest_framework import generics

from .. import models, serializers

class DashboardListView(generics.ListAPIView):
    serializer_class = serializers.DashboardSerializer
    
    def get_queryset(self):
        user = self.request.user
        qs = models.User.objects.all().filter(pk=user.id)
        return qs

dashboard_list_view = DashboardListView.as_view()