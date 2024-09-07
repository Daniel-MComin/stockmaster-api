import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService,
    private dialogref: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { 
    this.service.getByCode(data.id).subscribe((result) => {
      this.userList = result;
      this.name = this.userList.name
      this.email = this.userList.email
      this.user = this.userList.username
  })
}
  userList:any
  user:any;
  email:any;
  name: any;

  deleteUser(){
    if(this.data){  
    this.service.deleteUser(this.data.id).subscribe({
      next: (val: any) => {
        this.toastr.success('Usuário deletado com sucesso');
        this.dialogref.close(true);
      },
      error: (erro:any) => {
        this.toastr.error('Erro ao atualizar usuário!')
        }
      })
    }
  }
}
