import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of } from 'rxjs';
import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { AddFornecedoresComponent } from './add-fornecedores/add-fornecedores.component';
import { EditFornecedoresComponent } from './edit-fornecedores/edit-fornecedores.component';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrl: './fornecedores.component.css'
})
export class FornecedoresComponent implements OnInit {

  dataSource!: MatTableDataSource<any>;

  submitted: boolean = false;
  fornecedores: any;
  
  displayedColumns = ['id','nome','email', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private service: ServiçosEstoqueService,
  ) {
  }  

  ngOnInit(): void {
    this.getFornecedoresList()
    this.service.getFornecedor().subscribe(result => {
      this.fornecedores = result;
    });
  }

  getFornecedoresList(){
    this.service.getFornecedor().subscribe({
      next: (res) => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      },
      error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddForm(){
    const dialogRef = this.dialog.open(AddFornecedoresComponent, {
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
          this.getFornecedoresList();
      },
    });
  }    

  deleteFornecedor(id:any) {
    this.service.getFornecedorID(id).subscribe((data: any) => {
      if (data.count > 0) {
        this.toastr.warning('Não é possível remover um fornecedor que possui produtos associados.');
      } else {
        this.service.deleteFornecedor(id).pipe(
          catchError(error => {
            alert('Erro ao remover o fornecedor.');
            return of(null);
          })
        ).subscribe(() => {
          this.getFornecedoresList();
        });
      }
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(EditFornecedoresComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFornecedoresList();
        }
      },
    });
  }
}
