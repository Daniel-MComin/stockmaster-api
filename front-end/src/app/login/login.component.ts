import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../estoque/models/user';


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
      password: ['', [Validators.required, Validators.minLength(3)]],
    })


    onLogin(){
      if(this.loginForm.valid){
        const dataLogin = <User>{
          username: this.loginForm.value.username,
          password: this.loginForm.value.password
        }


      this.service.onLogin(dataLogin);
      } else {
        this.toastr.error('Por favor digite dados válidos!')
      }
    }
}
