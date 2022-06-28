from rest_framework import serializers

from . import user
from .. import models

class AssignedMemberSerializer(serializers.ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(queryset=models.User.objects.all())
    name = serializers.ReadOnlyField(source="user.name")
    
    class Meta:
        model = models.AssignedMember
        fields = [
            'id',
            'name',
        ]