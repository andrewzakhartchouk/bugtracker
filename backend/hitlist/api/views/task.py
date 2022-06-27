from rest_framework import viewsets

from .. import serializers, models


class TaskViewSet(viewsets.ModelViewSet):
    queryset = models.Task.objects.all()
    serializer_class = serializers.task.ListTaskSerializer
    lookup_field = "pk"