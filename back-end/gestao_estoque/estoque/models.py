from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone


class Categoria(models.Model):
    nome = models.CharField(max_length=100)

    def __str__(self):
        return self.nome
    
    def delete(self, *args, **kwargs):
        if Produto.objects.filter(categoria=self).exists():
            raise ValidationError("Não é possível deletar esta categoria porque ela está sendo usada em um produto.")
        super().delete(*args, **kwargs)

class Fornecedor(models.Model):
    nome = models.CharField(max_length=100)
    contato = models.CharField(max_length=100, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return self.nome
    
    def delete(self, *args, **kwargs):
        if Produto.objects.filter(fornecedor=self).exists():
            raise ValidationError("Não é possível deletar este fornecedor porque ele está sendo usado em um produto.")
        super().delete(*args, **kwargs)

class Produto(models.Model):
    nome = models.CharField(max_length=100)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    categoria = models.ForeignKey(Categoria, on_delete=models.SET_NULL, null=True)
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.SET_NULL, null=True)
    data_entrada  = models.DateField(default=timezone.now)
   
    def __str__(self):
        return self.nome
