from rest_framework import generics

from .. import models, serializers

class ProjectListCreateAPIView(generics.ListCreateAPIView):
    queryset = models.Project.objects.all()
    # serializer_class = serializers.project.ListProjectSerializer
    serializers = {
        "GET": serializers.project.ListProjectSerializer,
        "POST": serializers.project.CreateProjectSerializer,
    }
    
    def get_serializer_class(self, *args, **kwargs):
        return self.serializers.get(self.request.method, self.serializers['GET'])
        
project_list_create_view = ProjectListCreateAPIView.as_view()

class ProjectDetailAPIView(generics.RetrieveAPIView):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer

project_detail_view = ProjectDetailAPIView.as_view()

class ProjectUpdateAPIView(generics.UpdateAPIView):
    queryset = models.Project.objects.all()
    serializer_class = serializers.CreateProjectSerializer
    lookup_field = "pk"

project_update_view = ProjectUpdateAPIView.as_view()

class ProjectTaskListAPIView(generics.ListAPIView):
    queryset = models.Task.objects.all()
    serializer_class = serializers.task.ListTaskSerializer

    def get_queryset(self):
        project_pk = self.kwargs.get("pk")
        return self.queryset.filter(project__pk=project_pk)

project_task_list_view = ProjectTaskListAPIView.as_view()