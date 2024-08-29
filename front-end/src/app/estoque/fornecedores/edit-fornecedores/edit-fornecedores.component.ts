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
export class EditFornecedoresComponent implements OnInit{
  constructor( 
    private builder: FormBuilder,
    private service: ServiçosEstoqueService,
    private toastr: ToastrService,
    private dialog: MatDialogRef<EditFornecedoresComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any){
  }
  
  ngOnInit(): void {
    this.fornecedorForm.patchValue(this.data);
  }


  fornecedorForm = this.builder.group({
    nome: [ '' ],
    contato: [' '],
    email:[' ']
  });

  onSubmit(){
    if(this.fornecedorForm.valid){
    if(this.data){
      this.service.updateFornecedor(this.data.id, this.fornecedorForm.value).subscribe({
        next: (val: any) => {
          this.toastr.success('Fornecedor atualizado com sucesso');
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
