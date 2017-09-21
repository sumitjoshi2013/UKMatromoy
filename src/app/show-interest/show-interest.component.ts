import { Component, OnInit, Inject } from '@angular/core';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, NG_VALIDATORS} from '@angular/forms';
import { ThanksshowinginterestComponent } from './../thanksshowinginterest/thanksshowinginterest.component';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from './../services/auth.service';
import { dataService } from "app/services/data.service";
import {MdDialog, MdDialogRef,  MD_DIALOG_DATA} from '@angular/material';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';


export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-show-interest',
  templateUrl: './show-interest.component.html',
  styleUrls: ['./show-interest.component.css']
})
export class ShowInterestComponent   {
 
  constructor(  public dialog: MdDialog,
    private authService: AuthService, private router: Router, 
    private dataservice: dataService, private route: ActivatedRoute,
    @Inject(MD_DIALOG_DATA) public userdata: any
  ) { }

  myform = new FormGroup({
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    interest: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    recaptcha:  new FormControl('', Validators.required)
  });

  get email()
  {
    return this.myform.get("email");
  }
  
  get phone()
  {
    return this.myform.get("phone");
  }
  
  get interest()
  {
    return this.myform.get("interest");
  }
  
  get message()
  {
    return this.myform.get("message");
  }

  get recaptcha()
  {
    return this.myform.get("recaptcha");
  }

  interestList = [
    {id:1, name:'Accept'},
    {id:2, name:'Reject'},
];

gotoClose(data)
{
  let profileId = this.userdata.userid;
//  console.log('Calling Close' + this.userdata.userid);
  let url = "http://localhost:8910/Api/api/ShowInterest";
  
  var UserInterestData = {
    "CommunicatorUserEmailId": this.authService.currentUser.name,
    "ResponderUserId": profileId,
    "ResponseStatus": data.value.interest,
    "Message": data.value.message,
    "ContactEmailId": data.value.email,
    "ContactPhoneNumber": data.value.phone
  }
  let result= this.dataservice.Insert(url, UserInterestData);
  //console.log(result);
}
}