from wsgiref import validate
from rest_framework import serializers

from .. import models


class StageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Stage
        fields = [
            'project',
            'name',
            'color',
            'order',
        ]

    def update(self, instance, validated_data):
        new_order = validated_data.pop('order', instance.order)
        if (instance.order != new_order):
            project = instance.project
            order_end = find_order_end(project)
            current_order = instance.order

            if (new_order > order_end):
                new_order = order_end
                adjust_order(project, current_order, order_end, -1)
            elif (new_order < 1):
                new_order = 1
                adjust_order(project, 1, current_order, 1)
            else:
                if (new_order > current_order):
                    adjust_order(project, current_order+1, new_order, -1)
                else:
                    adjust_order(project, new_order, current_order-1, 1)

        instance.order = new_order
        super().update(instance, validated_data)
        return instance

class CreateStageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Stage
        fields = [
            'project',
            'name',
            'color',
        ]
    
    def create(self, validated_data):
        project = validated_data.get('project')
        stage = models.Stage(**validated_data)
        stage.order = find_order_end(project) + 1
        stage.save()
        return stage

class StageTagSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(read_only=True)
    color = serializers.CharField(read_only=True)
    order = serializers.IntegerField(read_only=True)


def find_order_end(project):
        stages = project.stage_set.all().order_by('-order')[0]
        return stages.order

def adjust_order(project, start, finish, amount):
        stages = project.stage_set.all().filter(order__gte=start).filter(order__lte=finish)
        for stage in stages:
            stage.order += amount
            stage.save()
    
    