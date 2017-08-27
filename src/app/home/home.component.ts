import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header/header.component';
//import './home.js';
import { Router } from "@angular/router";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, private router: Router) 
  {

   // let cuser = this.authService.currentUser.name;
//console.log(cuser);
   }

Message()
{
  console.log("Message");
  this.router.navigate(['/messagehistory']);
} 
usermessage()
{
  console.log("Message");
  this.router.navigate(['/usermessage']);
}  
}
