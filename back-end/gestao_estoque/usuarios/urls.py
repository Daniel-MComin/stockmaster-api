from django.urls import path
from .views import RegistroUsuarioView, UsuarioListView, UsuarioDetailView, GetUserByUsername

urlpatterns = [
    path('registrar/', RegistroUsuarioView.as_view(), name='registrar_usuario'),
    path('', UsuarioListView.as_view(), name='lista_usuarios'),
    path('<int:pk>',UsuarioDetailView.as_view(), name='detalhe_usuario'),
    path('<str:username>', GetUserByUsername.as_view(), name='get_user_by_username'),
]
