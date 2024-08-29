from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Categoria, Fornecedor, Produto
from .serializers import CategoriaSerializer, FornecedorSerializer, ProdutoSerializer
from django.db.models import Count
from django.db.models import Sum
from rest_framework import status

class CategoriaListView(generics.ListCreateAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.AllowAny]

class CategoriaDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    permission_classes = [permissions.AllowAny]

class FornecedorListView(generics.ListCreateAPIView):
    queryset = Fornecedor.objects.all()
    serializer_class = FornecedorSerializer
    permission_classes = [permissions.AllowAny]

class FornecedorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Fornecedor.objects.all()
    serializer_class = FornecedorSerializer
    permission_classes = [permissions.AllowAny]

class ProdutoListView(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [permissions.AllowAny]

class ProdutoDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    permission_classes = [permissions.AllowAny]


class ProdutoCountView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        total_produtos = Produto.objects.count()
        return Response({'total_produtos': total_produtos})

class ProdutoCountByAllCategoriasView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        counts = Produto.objects.values('categoria__nome').annotate(total=Count('id'))
        return Response(counts)
    
class ProdutoCountByAllFornecedoresView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        counts = Produto.objects.values('fornecedor__nome').annotate(total=Count('id'))
        return Response(counts)
    
class TotalPrecoView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, *args, **kwargs):
        total_preco = Produto.objects.aggregate(total=Sum('preco'))['total']
        return Response({'total_preco': total_preco}, status=status.HTTP_200_OK)