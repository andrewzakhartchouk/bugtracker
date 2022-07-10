from rest_framework import serializers
from rest_framework_simplejwt import tokens
from django import contrib
from datetime import datetime, timezone

from .. import models

class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.User
        fields = [
            "id",
            "name",
        ]

class RegisterUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, validators=[contrib.auth.password_validation.validate_password])
    password_confirmation = serializers.CharField(write_only=True, required=True)
    invite_code = serializers.CharField(write_only=True, required=False, allow_null=True, default=None)

    class Meta:
        model = models.User
        fields = [
            "email",
            "name",
            "password",
            "password_confirmation",
            "invite_code",
        ]

    def validate_email(self, value):
        if (models.User.objects.filter(email__exact=value).exists()):
             raise serializers.ValidationError('This email address is already registered under another user.')  
        return value

    def validate_invite_code(self, value):
        if value:
            invite = models.Invite.objects.filter(uuid__exact=value).first()
            if not (invite):
                raise serializers.ValidationError("Invite code is invalid.")
            time_diff = datetime.now(timezone.utc) - invite.created_at
            days_passed = divmod(time_diff.total_seconds(), 86400)[0] 
            if (days_passed >= 1):
                raise serializers.ValidationError("Invitation has expired.")
        return value

    def validate(self, data):
        if data['password'] != data['password_confirmation']:
            raise serializers.ValidationError({"password": "Entered passwords do not match."})
        return data

    def create(self, validated_data):
        user = models.User(
            email=validated_data['email'],
            name=validated_data['name'],
        )
        user.set_password(validated_data['password'])
        user.save()

        invites = models.Invite.objects.filter(uuid__exact=validated_data["invite_code"]).filter(email__exact=user.email).select_related('team').all()
        for invite in invites:
            user.teams.add(invite.team)
            invite.delete()

        return user

    def get_auth_tokens(self, user):
        token = tokens.RefreshToken.for_user(user)
        return {
            "access": str(token.access_token),
            "refresh": str(token),
        }

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation.update(self.get_auth_tokens(instance))
        return representation
        