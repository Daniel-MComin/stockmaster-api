import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstoqueComponent } from './estoque/estoque.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { HomeEstoqueComponent } from './home-estoque/home-estoque.component';

const routes: Routes = [
  {path: '', component: HomeEstoqueComponent, children: [
    { path: 'fornecedores', component: FornecedoresComponent },
    { path: 'produtos', component: EstoqueComponent} 
  ]
},
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstoqueRoutingModule { }
