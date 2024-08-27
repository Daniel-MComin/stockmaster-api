import { Component } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stockmaster';
  isMenuRequired = true;
  isAdmin = false

  constructor(
     private router: Router,
     private service: AuthService){

    let role = sessionStorage.getItem('role');
    if(role == 'admin'){
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        let currentUrl = this.router.url
        if(currentUrl == '/login' || currentUrl == '/register'){
          this.isMenuRequired = false;
        } else {
          this.isMenuRequired = true;
        }  
      }
    }) 
  }

}
