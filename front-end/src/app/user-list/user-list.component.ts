import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
constructor(
  private service: AuthService,
  private dialog: MatDialog,
){
  this.loadUser();
}

user: any;
userList: any;

@ViewChild(MatPaginator) paginator !: MatPaginator;

loadUser(){
    this.service.getAll().subscribe(result => {
    this.userList = result
    console.log(this.userList)
    this.user = new MatTableDataSource(this.userList);
    this.user.paginator = this.paginator
})
}

displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status' ,'action'];


updateUser(code: any) {
  this.OpenDialog('600ms', '600ms', code);
}

OpenDialog(enteranimation: any, exitanimation: any, code: string) {
  const popup = this.dialog.open(PopUpComponent, {
    enterAnimationDuration: enteranimation,
    exitAnimationDuration: exitanimation,
    width: '18%',
    data: {
      usercode: code
    }
  });
  popup.afterClosed().subscribe(res => {
    this.loadUser();
  });
}


}
