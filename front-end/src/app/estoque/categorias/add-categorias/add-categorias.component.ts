import { Component, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiçosEstoqueService } from '../../serviços/serviços-estoque.service';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Estoque } from '../../models/estoque';

@Component({
  selector: 'app-add-categorias',
  templateUrl: './add-categorias.component.html',
  styleUrl: './add-categorias.component.css'
})
export class AddCategoriasComponent {

  constructor(
    private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<AddCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) private data:Estoque){
  }

  categoriaForm = this.builder.group({
    nome: [ '' ],
  });

  onSubmit(){
    if(this.categoriaForm.valid){
      const fornecedor = this.categoriaForm.value;
          this.service.addFornecedor(fornecedor).subscribe({
            next: (val: any) => {
              this.toastr.success('Categoria adicionado com sucesso');
              this.dialog.close();
            },
            error: (erro: any) => {
              this.toastr.error('Erro ao adicionar nova categoria!');
            }
          });
        }

      }

}
