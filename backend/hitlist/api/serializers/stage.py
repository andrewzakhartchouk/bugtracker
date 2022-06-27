from rest_framework import serializers

from . import stage
from .. import models

class StageTagSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    color = serializers.CharField(read_only=True)
    
    