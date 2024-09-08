from rest_framework import generics, permissions
from rest_framework.response import Response
from django.contrib.auth import get_user_model
from .models import Usuario
from .serializers import UsuarioSerializer, RegistroUsuarioSerializer
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.views import APIView
from .serializers import CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .permissions import IsSuperUser
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework import status

Usuario = get_user_model()

class RegistroUsuarioView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = RegistroUsuarioSerializer
    permission_classes = [permissions.AllowAny]

class UsuarioListView(generics.ListAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [permissions.IsAuthenticated]

class UsuarioDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    permission_classes = [IsSuperUser]

class GetUserByUsername(generics.RetrieveAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    lookup_field = 'username'
    permission_classes = [permissions.IsAuthenticated]

class UserCountView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user_count = Usuario.objects.count()
        return Response({'user_count': user_count})

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
