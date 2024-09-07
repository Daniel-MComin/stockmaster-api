from rest_framework import serializers
from .models import Usuario
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

Usuario = get_user_model()

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'name', 'is_active', 'is_superuser']

class RegistroUsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'password','name']

    def create(self, validated_data):
        usuario = Usuario.objects.create_user(
        name = validated_data['name'],
        username=validated_data['username'],
        email=validated_data['email'],
        password=validated_data['password'],
        is_active=validated_data['is_active'],
        is_superuser=validated_data['is_superuser']
        )
        return usuario

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        token['name'] = user.name
        token['email'] = user.email
        token['is_active'] = user.is_active
        token['is_superuser'] = user.is_superuser

        return token