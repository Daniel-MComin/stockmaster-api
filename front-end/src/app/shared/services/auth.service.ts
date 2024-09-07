import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay, Observable } from 'rxjs';
import { User } from '../../estoque/models/user';
import { IToken } from '../../estoque/models/token';
import jwt_decode, { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }

  API = 'http://127.0.0.1:8000/api/usuarios/'
  
  getAll(){
   return this.http.get(this.API).pipe(delay(2000));
  }

  getUserCount(): Observable<{ user_count: number }> {
    return this.http.get<{ user_count: number }>(`${this.API}count/`);
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

  private isSuperUser: boolean = false;
  private token: any;
  onLogin(data:User) {
    return this.http.post<IToken>('http://localhost:8000/api/token/', data)
    .subscribe({
      next: response => {
        sessionStorage.setItem('token', response.access);
        const decodedToken: any = jwtDecode(response.access);
        this.isSuperUser = decodedToken.is_superuser;
        sessionStorage.setItem('isSuperUser', JSON.stringify(this.isSuperUser));
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
    this.isSuperUser = false;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('isSuperUser');
    this.router.navigate(['/login']);
  }

  deleteUser(id:any){
    return this.http.delete(`${this.API}${id}`);
  }
   
}
