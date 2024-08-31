import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }

  API = 'http://localhost:3000/user/'
  APIrole ='http://localhost:3000/role'
  
  getAll(){
   return this.http.get(this.API).pipe(delay(2000));
  }

  getAllRole(){
    return this.http.get(this.APIrole);
   }

  getByCode(id:any){
    console.log(id)
    return this.http.get(this.API + id)
   }

   makeRegister(data:any){
    return this.http.post('http://127.0.0.1:8000/api/usuarios/registrar/', data);
   }

   updateUser(id:any, data: any){
    return this.http.put(this.API + id, data);
   }

   isLogged(){
    return sessionStorage.getItem('username')!=null;
    //indica se o usuário está logado ou não, atribuindo o valor true se o username for diferente de nulo.
   }

   getUserRole(){
   return this.http.get('http://localhost:3000/role')
   }

   GetRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():''
   }

  private token: any;
  onLogin(data:any) {
    return this.http.post<any>('http://localhost:8000/api/token/', data)
    .subscribe({
      next: response => {
        this.token = response.access;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/']);
      },
      error: error => {
        this.toastr.error('Erro ao fazer login', 'Erro');
      }
    });
}


  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  logOut() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
   
}
