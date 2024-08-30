import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
import { Estoque } from '../models/estoque';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})

export class EstoqueComponent implements OnInit{

  dataSource!: MatTableDataSource<Estoque>;

  submitted: boolean = false;
  estoque$: Observable <any>;
  
  displayedColumns = ['id','name','fornecedor','categoria','preco', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private service: ServiçosEstoqueService,
  ) {
    
  }  

  categorias: any;
  fornecedores: any;

  ngOnInit(): void {
    this.getProductList()
    this.service.getCategory().subscribe(result => {
      this.categorias = result;
    });

    this.service.getFornecedor().subscribe(result => {
      this.fornecedores = result;
    });
  }

  getFornecedorName(id: number): string {
    const fornecedor = this.fornecedores.find((f: { id: number; }) => f.id === id);
    return fornecedor ? fornecedor.nome : 'Fornecedor Desconhecido';
  }

  getCategoriaName(id: number): string {
    const categoria = this.categorias.find((c: { id: number; }) => c.id === id);
    return categoria ? categoria.nome : 'Categoria Desconhecida';
  }

  getProductList(){
      this.service.lista().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          const dataStr = `${data.id} ${data.nome} ${this.getCategoriaName(data.categoria)} ${this.getFornecedorName(data.fornecedor)}`.toLowerCase();
          return dataStr.includes(filter.trim().toLowerCase());
        };
      },
      error: console.log,
    }); 
  }

  handleError(){
    this.toastr.warning('Erro ao carregar produtos!', 'Tente novamente mais tarde!');
  }

  openAddForm(){
    const dialogRef = this.dialog.open(AddComponent, {
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
          this.getProductList();
      },
    });
  }    

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe({
      next: (res) => {
        this.toastr.success('Produto deletado com sucesso!');
        this.getProductList();
      },
      error: (err) => {
        this.toastr.warning('Erro ao deletar produto!')
      },
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(EditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductList();
        }
      },
    });
  }

}

  

