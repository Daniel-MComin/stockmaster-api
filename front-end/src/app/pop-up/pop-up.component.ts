import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent{
  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<PopUpComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {

    this.service.getUserRole().subscribe(result => {
      this.roleList = result;
      console.log(this.roleList);

      if (this.data.usercode != '' && this.data.usercode != null) {
        console.log(this.data.usercode)
        this.loadUserData(this.data.usercode);
      }
    });
  }
 
  roleList: any;
  editData: any;

  registerForm = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    role: this.builder.control('', Validators.required),
    status: this.builder.control(false)
  });

  loadUserData(code: any) {
    this.service.getByCode(code).subscribe(result => {
      this.editData = result;
      console.log(this.editData);
      this.registerForm.setValue({
        id: this.editData.id,
        name: this.editData.name,
        password: this.editData.password,
        email: this.editData.email,
        role: this.editData.role,
        status: this.editData.status
      });
    });
  }
  updateUserPerm() {
    this.service.updateUser(
      this.registerForm.value.id,this.registerForm.value)
       .subscribe(res => {
      this.toastr.success('Usuário Atualizado com Sucesso.');
      this.dialogref.close();
    });
  }


  
}
