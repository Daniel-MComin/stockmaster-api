import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { HomeEstoqueComponent } from './home-estoque/home-estoque.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeEstoqueComponent,
    children: [
      { path: 'categorias', component: CategoriasComponent },
      { path: 'fornecedores', component: FornecedoresComponent },
      { path: 'produtos', component: EstoqueComponent },
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
