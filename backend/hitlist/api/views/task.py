from rest_framework import generics

from .. import models, serializers

class TaskListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Task.objects.all()
    # serializer_class = serializers.task.ListTaskSerializer
    serializers = {
        "GET": serializers.task.ListTaskSerializer,
        "POST": serializers.task.TaskSerializer,
    }
    
    def get_serializer_class(self, *args, **kwargs):
        return self.serializers.get(self.request.method, self.serializers['GET'])

    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(user__pk=user.id)
        
task_list_create_view = TaskListCreateAPIView.as_view()

class TaskDetailAPIView(generics.RetrieveAPIView):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer

    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(user__pk=user.id)

task_detail_view = TaskDetailAPIView.as_view()

class TaskUpdateAPIView(generics.UpdateAPIView):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer
    lookup_field = "pk"

    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(user__pk=user.id)

task_update_view = TaskUpdateAPIView.as_view()