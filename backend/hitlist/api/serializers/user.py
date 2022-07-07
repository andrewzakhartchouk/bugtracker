from rest_framework import serializers
from rest_framework_simplejwt import tokens
from django import contrib

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


    class Meta:
        model = models.User
        fields = [
            "email",
            "name",
            "password",
            "password_confirmation",
        ]

    def validate_email(self, value):
        if (models.User.objects.filter(email__exact=value).exists()):
             raise serializers.ValidationError('This email address is already registered under another user.')  
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
        