from rest_framework import serializers

from .. import models

class InviteSerializer(serializers.ModelSerializer):
    team = serializers.PrimaryKeyRelatedField(queryset=models.Team.objects.all(), write_only=True)
    email = serializers.EmailField(write_only=True)

    class Meta:
        model = models.Invite
        fields = [
            "team",
            "email",
        ]

    def validate_team(self, value):
        request = self.context.get('request')
        user = request.user
        teams = user.teams.all()
        if (value not in teams):
            raise serializers.ValidationError('You do not have permission for this team.')

        return value

    def validate(self, data):
        validation_errors = {}
        request_team = data.get('team')
        request_email = data.get('email')

        user = models.User.objects.filter(email__exact=request_email).prefetch_related('teams').first()
        if (user and request_team in user.teams.all()):
            validation_errors['email'] = 'This user is already a member of this team.'

        if validation_errors:
            raise serializers.ValidationError(validation_errors)

        return data

    def create(self, validated_data):
        invite = models.Invite(**validated_data)
        invite.save()
        
        # TODO Send email invitation

        return invite