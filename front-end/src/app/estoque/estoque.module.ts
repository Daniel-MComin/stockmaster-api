import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EstoqueRoutingModule } from "./estoque-routing.module";
import { EstoqueComponent } from "./estoque/estoque.component";

import { MaterialModule } from "../shared/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { PopUpComponent } from "../user-list/pop-up/pop-up.component";
import { HomeComponent } from "../home/home.component";
import { UserListComponent } from "../user-list/user-list.component";
import { AddComponent } from "./estoque/add/add.component";
import { FornecedoresComponent } from "./fornecedores/fornecedores.component";
import { HomeEstoqueComponent } from "./home-estoque/home-estoque.component";
import { AddFornecedoresComponent } from "./fornecedores/add-fornecedores/add-fornecedores.component";
import { EditFornecedoresComponent } from "./fornecedores/edit-fornecedores/edit-fornecedores.component";
import { CategoriasComponent } from "./categorias/categorias.component";
import { AddCategoriasComponent } from "./categorias/add-categorias/add-categorias.component";
import { EditCategoriasComponent } from "./categorias/edit-categorias/edit-categorias.component";
import { EditComponent } from "./estoque/edit/edit.component";
import { HomeUserComponent } from "../home-user/home-user.component";
import { UsersComponent } from "../user-list/users/users.component";
import { ConfirmComponent } from "../user-list/confirm/confirm.component";

@NgModule({
  declarations: [
    EstoqueComponent,
    RegisterComponent,
    LoginComponent,
    PopUpComponent,
    HomeComponent,
    UserListComponent,
    AddComponent,
    EditComponent,
    FornecedoresComponent,
    HomeEstoqueComponent,
    AddFornecedoresComponent,
    EditFornecedoresComponent,
    CategoriasComponent,
    AddCategoriasComponent,
    EditCategoriasComponent,
    HomeUserComponent,
    UsersComponent, 
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    EstoqueRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EstoqueModule {}
