from rest_framework import serializers
from .models import Categoria, Fornecedor, Produto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nome'] 

class FornecedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fornecedor
        fields = ['id', 'nome', 'contato', 'email']

class ProdutoSerializer(serializers.ModelSerializer):
    categoria = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all())
    fornecedor = serializers.PrimaryKeyRelatedField(queryset=Fornecedor.objects.all())

    class Meta:
        model = Produto
        fields = ['id','nome', 'preco', 'categoria', 'fornecedor','data_entrada']
     
def create(self, validated_data):
        return Produto.objects.create(**validated_data)
