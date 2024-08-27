import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService ,
    private router: Router

    ){
      sessionStorage.clear()
    }

    userData: any;

    loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    login(){
      if(this.loginForm.valid){
          this.service.getByCode(this.loginForm.value.username).subscribe(result =>
            {
             this.userData = result
             console.log(result)
             if(this.userData.password === this.loginForm.value.password){
              if(this.userData.status){
                sessionStorage.setItem('username', this.userData.id);
                sessionStorage.setItem('role', this.userData.role);
                console.log(this.userData.role)
                this.router.navigate(['']);
                this.toastr.success('Login realizado com sucesso!')
              } else {
                this.toastr.error('Por favor contate o Administrador.', 'Usuário Inativo')
              }             
             } else {
              this.toastr.error('Usuário ou senha incorretos!')
             }
            });
        } else {
          this.toastr.error('Por favor digite dados válidos!')
        }
      }
}
