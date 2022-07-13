from rest_framework import generics

from .. import models, serializers

class TeamListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Team.objects.all()
    serializer_class = serializers.team.TeamSerializer
    
    def perform_create(self, serializer):
        serializer.save()
        
team_list_create_view = TeamListCreateAPIView.as_view()

class TeamDetailAPIView(generics.RetrieveAPIView):
    queryset = models.Team.objects.all()
    serializer_class = serializers.team.TeamSerializer
    lookup_field = "pk"

team_detail_view = TeamDetailAPIView.as_view()

class TeamUpdateAPIView(generics.UpdateAPIView):
    queryset = models.Team.objects.all()
    serializer_class = serializers.team.TeamSerializer
    lookup_field = "pk"

    def perform_update(self, serializer):
        serializer.save()

team_update_view = TeamUpdateAPIView.as_view()