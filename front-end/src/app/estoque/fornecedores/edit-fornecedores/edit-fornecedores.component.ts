import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiçosEstoqueService } from '../../serviços/serviços-estoque.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estoque } from '../../models/estoque';

@Component({
  selector: 'app-edit-fornecedores',
  templateUrl: './edit-fornecedores.component.html',
  styleUrl: './edit-fornecedores.component.css'
})
export class EditFornecedoresComponent{
}
