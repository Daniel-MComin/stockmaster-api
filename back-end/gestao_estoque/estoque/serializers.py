from rest_framework import serializers
from .models import Categoria, Fornecedor, Produto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nome']

    def validate(self, data):
        if self.instance and Produto.objects.filter(categoria=self.instance).exists():
            raise serializers.ValidationError("Não é possível remover uma categoria que possui produtos associados.")
        return data

class FornecedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fornecedor
        fields = ['id', 'nome', 'contato', 'email']

    def validate(self, data):
        if self.instance and Produto.objects.filter(fornecedor=self.instance).exists():
            raise serializers.ValidationError("Não é possível remover um fornecedor que possui produtos associados.")
        return data


class ProdutoSerializer(serializers.ModelSerializer):
    categoria = serializers.PrimaryKeyRelatedField(queryset=Categoria.objects.all())
    fornecedor = serializers.PrimaryKeyRelatedField(queryset=Fornecedor.objects.all())

    class Meta:
        model = Produto
        fields = ['id', 'nome', 'preco', 'categoria', 'fornecedor']
     
def create(self, validated_data):
        return Produto.objects.create(**validated_data)
