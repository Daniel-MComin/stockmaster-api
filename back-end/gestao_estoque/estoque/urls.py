from django.urls import path
from .views import CategoriaListView, CategoriaDetailView, FornecedorListView, FornecedorDetailView, ProdutoListView, ProdutoDetailView, ProdutoCountView, ProdutoCountByAllCategoriasView,ProdutoCountByAllFornecedoresView

urlpatterns = [
    path('categorias/', CategoriaListView.as_view(), name='lista_categorias'),
    path('categorias/<int:pk>/', CategoriaDetailView.as_view(), name='detalhe_categoria'),
    path('fornecedores/', FornecedorListView.as_view(), name='lista_fornecedores'),
    path('fornecedores/<int:pk>/', FornecedorDetailView.as_view(), name='detalhe_fornecedor'),
    path('produtos/', ProdutoListView.as_view(), name='lista_produtos'),
    path('produtos/<int:pk>/', ProdutoDetailView.as_view(), name='detalhe_produto'),
    path('produtos/count/', ProdutoCountView.as_view(), name='produto-count'),
    path('produtos/count/categorias/', ProdutoCountByAllCategoriasView.as_view(), name='produto-count-by-all-categorias'),
    path('produtos/count/fornecedores/', ProdutoCountByAllFornecedoresView.as_view(), name='produto-count-by-all-fornecedores'),
   
]
