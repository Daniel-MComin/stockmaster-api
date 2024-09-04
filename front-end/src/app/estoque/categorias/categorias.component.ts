import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { catchError, of } from 'rxjs';
import { ServiçosEstoqueService } from '../serviços/serviços-estoque.service';
import { AddCategoriasComponent } from './add-categorias/add-categorias.component';
import { EditCategoriasComponent } from './edit-categorias/edit-categorias.component';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  dataSource!: MatTableDataSource<any>;

  submitted: boolean = false;
  categorias: any;
  
  displayedColumns = ['id','nome', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private service: ServiçosEstoqueService,
  ) {
   this.getCategoriasList()
  }  

  ngOnInit(): void {
    this.getCategoriasList()
    this.service.getCategory().subscribe(result => {
      this.categorias = result;
    });
  }

  getCategoriasList(){
    this.service.getCategory().subscribe({
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
    const dialogRef = this.dialog.open(AddCategoriasComponent, {
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
          this.getCategoriasList();
      },
    });
  }    

  deleteCategorias(id:any) {
    this.service.getCategoriaID(id).subscribe((data: any) => {
      if (data.count > 0) {
        this.toastr.warning('Não é possível remover um fornecedor que possui produtos associados.');
      } else {
        this.service.deleteCategoria(id).pipe(
          catchError(error => {
            alert('Erro ao remover o fornecedor.');
            return of(null);
          })
        ).subscribe(() => {
          this.getCategoriasList();
        });
      }
    });
  }

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(EditCategoriasComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCategoriasList();
        }
      },
    });
  }

}
