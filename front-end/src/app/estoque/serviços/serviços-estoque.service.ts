import { Injectable, } from '@angular/core';

import { Estoque } from '../models/estoque';
import { HttpClient } from '@angular/common/http';
import { delay, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiçosEstoqueService {
  private readonly API = 'http://127.0.0.1:8000/api/estoque/produtos/';

  constructor(private httpClient: HttpClient) {}

  lista() {
    return this.httpClient.get<Estoque[]>(this.API)
    .pipe(
      take(1),
      delay(1000),
      tap(estoques => {console.log(estoques)
      }),
    )
  }

loadById(id:any){
    return this.httpClient.get(`${this.API}${id}/`).pipe(take(1));
  }
   
addProduct(data:any) {
    return this.httpClient.post(this.API, data);
  }

deleteProduct(id:number){
    return this.httpClient.delete(`${this.API}${id}/`)
  }
  
updateProduct(id: any, data: any){
    return this.httpClient.put(`http://127.0.0.1:8000/api/estoque/produtos/${id}/`, data)
  }

getFornecedor(){
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/estoque/fornecedores/');
 }

getFornecedorID(id:any){
  return this.httpClient.get<any>(`http://127.0.0.1:8000/api/estoque/fornecedores/${id}/`);
}

deleteFornecedor(id:any){
  return this.httpClient.delete(`http://127.0.0.1:8000/api/estoque/fornecedores/${id}/`)
}

addFornecedor(data:any){
  return this.httpClient.post('http://127.0.0.1:8000/api/estoque/fornecedores/', data);
 }

getCategory(){
  return this.httpClient.get<any>('http://127.0.0.1:8000/api/estoque/categorias/');
}

getCategoryNumber(){
  return this.httpClient.get<any>('http://127.0.0.1:8000/api/estoque/produtos/count/categorias/');
}

getFornecedoresNumber(){
  return this.httpClient.get<any>('http://127.0.0.1:8000/api/estoque/produtos/count/fornecedores/');
}

getProductNumber(){
  return this.httpClient.get<any>('http://127.0.0.1:8000/api/estoque/produtos/count/');
}
}
 