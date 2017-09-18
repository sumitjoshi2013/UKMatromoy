import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HeaderMenuComponent } from '../header/header.component';
//import './home.js';
import { Router } from "@angular/router";
import { dataService } from "app/services/data.service";


class userArray {
  constructor(public message: string, public profileid: string,
              public name: string, public status: string
  ){}
}




@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private dataservice: dataService  ) 
  { }
  userData : userArray[]; 
  RequestStatusCount : object; 

  ngOnInit() {
    let userRequests = "http://localhost:8910/api/api/UserRequests?userid="; 
    this.dataservice.getData(userRequests + this.authService.currentUser.name).
    subscribe((res: any) => 
    { this.RequestStatusCount = res });

    let showInterest = "http://localhost:8910/api/api/ShowInterest?userid="; 
    this.dataservice.getData(showInterest + this.authService.currentUser.name).
    subscribe((res: any) => 
    { this.userData = res });


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
