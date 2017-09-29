import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../services/auth.service';
import { ViewChild} from '@angular/core';
import { Router } from "@angular/router";
import {MdDialog, MdDialogRef,  MD_DIALOG_DATA} from '@angular/material';
import { ForgetprofileComponent } from 'app/forgetprofile/forgetprofile.component';

export interface FormModel {
  captcha?: string;
}

 
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  invalidLogin: boolean; 
  @ViewChild('f') form: any;
public formModel: FormModel = {};

  myform = new FormGroup({
    
   });
  
  constructor() { }

  ngOnInit() {
  }

   
}
