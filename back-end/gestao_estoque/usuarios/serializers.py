from rest_framework import serializers
from .models import Usuario
from django.contrib.auth import get_user_model

Usuario = get_user_model()

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'name', 'is_approved']

class RegistroUsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['id', 'username', 'email', 'password','name',]

    def create(self, validated_data):
        usuario = Usuario.objects.create_user(
        name = validated_data['name'],
        username=validated_data['username'],
        email=validated_data['email'],
        password=validated_data['password']
        )
        return usuario
