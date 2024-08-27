import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiçosEstoqueService } from '../../serviços/serviços-estoque.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estoque } from '../../models/estoque';

@Component({
  selector: 'app-add-fornecedores',
  templateUrl: './add-fornecedores.component.html',
  styleUrl: './add-fornecedores.component.css'
})
export class AddFornecedoresComponent {

  constructor(
    private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<AddFornecedoresComponent>,
    @Inject(MAT_DIALOG_DATA) private data:Estoque){
  }

  fornecedorForm = this.builder.group({
    nome: [ '' ],
    contato: [ '' ],
    email: [ '' ]
  });

  onSubmit(){
    if(this.fornecedorForm.valid){
      const fornecedor = this.fornecedorForm.value;
          this.service.addFornecedor(fornecedor).subscribe({
            next: (val: any) => {
              this.toastr.success('Fornecedor adicionado com sucesso');
              this.dialog.close();
            },
            error: (erro: any) => {
              this.toastr.error('Erro ao adicionar novo fornecedor!');
            }
          });
        }

      }
     
    }
  


