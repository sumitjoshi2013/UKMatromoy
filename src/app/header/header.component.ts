import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'menubar',
  templateUrl: 'header.component.html'
})
export class HeaderMenuComponent {

  constructor(private authService: AuthService, private router: Router) {
//let a = authService.currentUser.name;
//let b = authService.isLoggedIn();
  }
  logout()
  {
    console.log("logout button called...")
    this.authService.logout();
    this.router.navigate(['/#/login']);
    
  }
}
