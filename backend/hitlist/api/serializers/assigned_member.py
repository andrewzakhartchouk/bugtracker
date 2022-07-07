from rest_framework import serializers

from . import user
from .. import models

class AssignedMemberSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField(source="user_id")
    name = serializers.ReadOnlyField(source="user.name")
    
    class Meta:
        model = models.AssignedMember
        fields = [
            "id",
            'name',
        ]