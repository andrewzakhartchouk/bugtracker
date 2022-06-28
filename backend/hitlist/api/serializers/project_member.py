from rest_framework import serializers

from . import user
from .. import models, mixins

class ProjectMemberSerializer(mixins.FlattenMixin, serializers.ModelSerializer):
    # id = serializers.ReadOnlyField(source="user.id")
    # name = serializers.ReadOnlyField(source="user.name")
    # user = user.UserSerializer()
    
    class Meta:
        model = models.ProjectMember
        fields = [
            'project_lead',
        ]
        flatten = [('user', user.UserSerializer)]

    # def to_representation(self, obj):
    #     """Move fields from profile to user representation."""
    #     representation = super().to_representation(obj)
    #     profile_representation = representation.pop('profile')
    #     for key in profile_representation:
    #         representation[key] = profile_representation[key]

    #     return representation
