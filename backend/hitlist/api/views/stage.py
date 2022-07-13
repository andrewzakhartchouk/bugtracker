from rest_framework import generics, status

from .. import models, serializers

class StageCreateAPIView(generics.CreateAPIView):
    queryset = models.Stage.objects.all()
    serializer_class = serializers.stage.CreateStageSerializer
        
stage_create_view = StageCreateAPIView.as_view()

class StageUpdateAPIView(generics.UpdateAPIView):
    queryset = models.Stage.objects.all()
    serializer_class = serializers.StageSerializer
    lookup_field = "pk"
    
    def put(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

stage_update_view = StageUpdateAPIView.as_view()