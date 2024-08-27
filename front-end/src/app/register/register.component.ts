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
    id: [ '', Validators.required],
    name: [ '', [Validators.required, Validators.minLength(4)]],
    password:[ '', [Validators.required, Validators.minLength(6)]],
    email: [ '', [Validators.required, Validators.email]],
    role: [ '' ],
    status: [false]
  });

  register(){
  if(this.registerForm.valid){
      this.service.makeRegister(this.registerForm.value).subscribe(result =>
        {
          this.toastr.success('Contate o Administrador para ativar acesso.','Usuário registrado com sucesso');
          this.router.navigate(['login']);
        });
    } else {
      this.toastr.warning('Por favor digite dados válidos!');
    }
  }

  
}
