import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable } from 'rxjs';
import { User } from '../../estoque/models/user';
import { IToken } from '../../estoque/models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }

  API = 'http://127.0.0.1:8000/api/usuarios/'
  APIrole ='http://localhost:3000/role'
  
  getAll(){
   return this.http.get(this.API).pipe(delay(2000));
  }

  getUserCount(): Observable<{ user_count: number }> {
    return this.http.get<{ user_count: number }>(`${this.API}count/`);
  }

  getAllRole(){
    return this.http.get(this.APIrole);
   }

  getByCode(id:any){
    return this.http.get(this.API + id)
   }

   makeRegister(data:any){
    return this.http.post('http://127.0.0.1:8000/api/usuarios/registrar/', data);
   }

   updateUser(id:any, data: any): Observable<any>{
    return this.http.put(`${this.API}${id}`, data);
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
  onLogin(data:User) {
    return this.http.post<IToken>('http://localhost:8000/api/token/', data)
    .subscribe({
      next: response => {
        sessionStorage.setItem('token', response.access);
        this.router.navigate(['/']);
        this.toastr.success('Login efetuado com sucesso', 'Sucesso!');
      },
      error: error => {
        this.toastr.error('Usuário ou senha incorretos!', 'Erro');
      }
    });
}

  getToken() {
    if (!this.token) {
      this.token = sessionStorage.getItem('token');
    }
    return this.token;
  }

  logOut() {
    this.token = null;
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
   
}
