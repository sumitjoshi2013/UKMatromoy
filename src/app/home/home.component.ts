import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HeaderMenuComponent } from '../header/header.component';
//import './home.js';
import { Router } from "@angular/router";
import { dataService } from "app/services/data.service";
import {MdDialog, MdDialogRef,  MD_DIALOG_DATA} from '@angular/material';
import { UsermessagehistoryComponent } from 'app/usermessagehistory/usermessagehistory.component';
import { OrderByPipe } from '../common/orderby.pipe';
import { SearchNamePipe } from '../common/filter.pipe';

class userArray {
  constructor(public message: string, public profileid: string,
              public FULL_NAME: string, public status: string,
              public visitordate: string, public EmailId:string,
              public age: string, public maritialstatus: string,
              public gotra: string, public religion:string, 
              public VisitorID: string, public MY_OCCUPTION:string,
              public MY_SUB_CASTE:string
             
  ){}
}

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDesc: boolean = false;
  column: string = 'FULL_NAME';
  direction: number;

  constructor(private authService: AuthService, private router: Router, 
    private dataservice: dataService ,
    public dialog: MdDialog ) 
  { }
  userData : userArray[]; 
  RequestStatusCount : object; 

  ngOnInit() {

  
      let userRequests = "http://localhost:8910/api/api/UserRequests?userid="; 
      this.dataservice.getData(userRequests + this.authService.currentUser.name).
      subscribe((res: any) => 
      { this.RequestStatusCount = res });
 
      let showInterest = "http://localhost:8910/api/api/VisitorDetails?userid="; 
      this.dataservice.getData(showInterest + this.authService.currentUser.name).
      subscribe((res: any) => 
      { this.userData = res });
  
  }
 
Message()
{
  console.log("responderId");
  this.router.navigate(['Visitordetails/']);
  //this.router.navigate(['profiledetail/', responderId]);
  /*
  let dialogRef = this.dialog.open(UsermessagehistoryComponent, {
    width: '850px',
    data: { responderId: responderId}
  });
  */
} 

MessageLog(messageStatusId, responderId)
{
  let dialogRef = this.dialog.open(UsermessagehistoryComponent, {
    width: '850px',
    data: {messageStatusId: messageStatusId, responderId: responderId}
  });
} 

sort(property){
  this.isDesc = !this.isDesc; //change the direction    
  this.column = property;
  this.direction = this.isDesc ? 1 : -1;
};

}