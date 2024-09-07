import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder,
    private toastr: ToastrService,
    private service: AuthService ,
    private router: Router
    ){}

  registerForm = this.builder.group({
    username: [ '', [Validators.required]],
    name: [ '', [Validators.required, Validators.minLength(4)]],
    password:[ '', [Validators.required, Validators.minLength(6)]],
    email: [ '', [Validators.required, Validators.email]]
  });

  register(){
    if (this.registerForm.valid) {
      this.service.makeRegister(this.registerForm.value).subscribe({
        next: () => {
          this.toastr.success('Contate o Administrador para ativar acesso.', 'Usuário registrado com sucesso');
          this.router.navigate(['login']);
        },
        error: (err) => {
          if (err.error.email && err.error.email[0] === "user with this email already exists.") {
            this.toastr.error('Este e-mail já está em uso. Por favor, use outro e-mail.', 'Erro de Registro');
          } if (err.error.username && err.error.username[0] === "A user with that username already exists."){
            this.toastr.error('Este nome de usuário já está em uso.', 'Erro de Registro');
          } else {
            this.toastr.error('Ocorreu um erro. Por favor, tente novamente.', 'Erro de Registro');
          }
        }
      });
  }
}
}
