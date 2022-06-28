from rest_framework import serializers


class StageTagSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    color = serializers.CharField(read_only=True)
    order = serializers.IntegerField(read_only=True)
    
    