import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { EstoqueComponent } from './estoque/estoque/estoque.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeEstoqueComponent } from './estoque/home-estoque/home-estoque.component';
import { FornecedoresComponent } from './estoque/fornecedores/fornecedores.component';
import { CategoriasComponent } from './estoque/categorias/categorias.component';
import { authGuard } from './shared/guard/auth.guard';
import { HomeUserComponent } from './home-user/home-user.component';
import { UsersComponent } from './user-list/users/users.component';
import { adminGuard } from './shared/guard/guard.guard';



const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard]},
  { path: 'estoque', component: HomeEstoqueComponent, canActivate: [authGuard],
    children: [
      { path: '', component: EstoqueComponent },
      { path: 'fornecedores', component: FornecedoresComponent },
      { path: 'categorias', component: CategoriasComponent} 
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userhome', component: HomeUserComponent, canActivate: [authGuard],
   children: [
    { path: '', component: UsersComponent },
    { path: 'gerenciar', component: UserListComponent, canActivate: [adminGuard]}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
