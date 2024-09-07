import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-pop-up",
  templateUrl: "./pop-up.component.html",
  styleUrl: "./pop-up.component.css",
})

export class PopUpComponent implements OnInit {
  constructor(
    private builder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService,
    private dialogref: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
  }

  ngOnInit(): void {
    this.registerForm.patchValue(this.data);
  }

  registerForm = this.builder.group({
    email: [''],
    name: [''],
    username: [''],
    is_active: [false],
    is_superuser: [false]
  });


  onSubmit(){
    if(this.registerForm.valid){
    if(this.data){
      this.service.updateUser(this.data.id, this.registerForm.value).subscribe({
        next: (val: any) => {
          this.toastr.success('Usuário atualizado com sucesso');
          this.dialogref.close(true);
        },
        error: (erro:any) => {
          this.toastr.error('Erro ao atualizar usuário!')
          }
        })
      }
    }
  }
}
