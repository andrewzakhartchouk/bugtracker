from rest_framework import generics

from .. import models, serializers

class TaskListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Task.objects.all()
    # serializer_class = serializers.task.ListTaskSerializer
    serializers = {
        "GET": serializers.task.ListTaskSerializer,
        "POST": serializers.task.UpdateTaskSerializer,
    }
    
    def get_serializer_class(self, *args, **kwargs):
        return self.serializers.get(self.request.method, self.serializers['GET'])

    def get_queryset(self):
        return self.queryset.get_my_tasks(self.request.user.id)
        
task_list_create_view = TaskListCreateAPIView.as_view()

class TaskDetailAPIView(generics.RetrieveAPIView):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer

    def get_queryset(self):
        team_ids = [team.id for team in self.request.user.teams.all()]
        return self.queryset.get_team_tasks(team_ids)

task_detail_view = TaskDetailAPIView.as_view()

class TaskUpdateAPIView(generics.UpdateAPIView):
    queryset = models.Task.objects.all()
    serializer_class = serializers.UpdateTaskSerializer
    lookup_field = "pk"

    def get_queryset(self):
        team_ids = [team.id for team in self.request.user.teams.all()]
        return self.queryset.get_team_tasks(team_ids)

task_update_view = TaskUpdateAPIView.as_view()