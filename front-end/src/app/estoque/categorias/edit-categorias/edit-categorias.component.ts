import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiçosEstoqueService } from '../../serviços/serviços-estoque.service';

@Component({
  selector: 'app-edit-categorias',
  templateUrl: './edit-categorias.component.html',
  styleUrl: './edit-categorias.component.css'
})
export class EditCategoriasComponent implements OnInit {

  constructor( 
    private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<EditCategoriasComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any){
  }
  
  ngOnInit(): void {
    this.categoriaForm.patchValue(this.data);
  }
  
  categoriaForm = this.builder.group({
    nome: [ '' ],
  });

  onSubmit(){
    if(this.categoriaForm.valid){
    if(this.data){
      this.service.updateCategoria(this.data.id, this.categoriaForm.value).subscribe({
        next: (val: any) => {
          this.toastr.success('Categoria atualizado com sucesso');
          this.dialog.close(true);
        },
        error: (erro:any) => {
          this.toastr.error('Erro')
          }
        })
      }
    }
  }

}
