
import { Component, OnInit, ViewChild } from "@angular/core";

import { AuthService } from "../shared/services/auth.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { PopUpComponent } from "./pop-up/pop-up.component";
import { ConfirmComponent } from "./confirm/confirm.component";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrl: "./user-list.component.css",
})

export class UserListComponent implements OnInit {
  constructor(
    private service: AuthService,
    private dialog: MatDialog) {
    this.loadUser();
  }

  ngOnInit(): void {
      this.loadUser()
  }

  user: any;
  userList: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  loadUser() {
    this.service.getAll().subscribe((result) => {
      this.userList = result;
      console.log(this.userList);
      this.user = new MatTableDataSource(this.userList);
      this.user.paginator = this.paginator;
    });
  }

  displayedColumns: string[] = [
    "id",
    "username",
    "name",
    "email",
    "role",
    "status",
    "action",
  ];

  openEditForm(data: any) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadUser();
        }
      },
    });
  }

  openDeleteConfirm(data:any){
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.loadUser();
        }
      },
    });
  }
  
}
