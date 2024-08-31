import { Injectable, } from '@angular/core';

import { Estoque } from '../models/estoque';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, take, tap } from 'rxjs';

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

addCategoria(data:any){
  return this.httpClient.post('http://127.0.0.1:8000/api/estoque/categorias/', data);
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

getCategoriaID(id:any){
  return this.httpClient.get<any>(`http://127.0.0.1:8000/api/estoque/categorias/${id}/`);
}

deleteFornecedor(id:any){
  return this.httpClient.delete(`http://127.0.0.1:8000/api/estoque/fornecedores/${id}/`)
}

updateFornecedor(id:any, data:any){
  return this.httpClient.put(`http://127.0.0.1:8000/api/estoque/fornecedores/${id}/`, data);
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

deleteCategoria(id:any){
  return this.httpClient.delete(`http://127.0.0.1:8000/api/estoque/categorias/${id}/`)
}

updateCategoria(id:any, data:any){
  return this.httpClient.put(`http://127.0.0.1:8000/api/estoque/categorias/${id}/`, data);
}

getFornecedoresNumber(){
  return this.httpClient.get<any>('http://127.0.0.1:8000/api/estoque/produtos/count/fornecedores/');
}

getProductNumber(): Observable<{ total_produtos: number }>{
  return this.httpClient.get<{ total_produtos: number }>('http://127.0.0.1:8000/api/estoque/produtos/count/');
}

getProductAllPrice(): Observable<{ total_preco: number }>{
  return this.httpClient.get<{ total_preco: number }>('http://127.0.0.1:8000/api/estoque/produtos/total_preco/')
}
}
 