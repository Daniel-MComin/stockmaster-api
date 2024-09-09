import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrl: './home-user.component.css'
})
export class HomeUserComponent implements OnInit{

  visible: boolean = false;

  ngOnInit(): void {
    const isSuperUser = sessionStorage.getItem('isSuperUser');
    this.visible = isSuperUser === 'true'
  

  }

}
