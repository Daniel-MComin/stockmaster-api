import { Component, OnInit, ViewChild } from "@angular/core";

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { PopUpComponent } from "../pop-up/pop-up.component";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
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
    "status"
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


}
