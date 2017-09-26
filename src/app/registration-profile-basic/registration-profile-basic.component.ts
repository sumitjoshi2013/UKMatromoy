//https://github.com/kekeh/mydatepicker
import { Component, OnInit,ViewChild ,Directive,forwardRef, Attribute,OnChanges, SimpleChanges,Input} from '@angular/core';
import { Router } from "@angular/router";
import { NgSemanticModule } from "ng-semantic";
import {DatePickerComponent, IDatePickerConfig } from 'ng2-date-picker';
import {IMyDpOptions  } from 'mydatepicker/src/my-date-picker';
import { EqualValidator } from './../common/password.match.directive';
import { DropdownRequired } from './../common/dropdown.required.directive';
import { Http, Response, Request, RequestMethod, RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder, NG_VALIDATORS} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { NotFoundError } from './../common/not-found-error';
import { dataService } from "app/services/data.service";
import {MdAutocompleteModule} from '@angular/material';
import { AuthService } from "app/services/auth.service";


export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-registration-profile-basic',
  templateUrl: './registration-profile-basic.component.html',
  styleUrls: ['./registration-profile-basic.component.css']
})
export class RegistrationProfileBasicComponent implements OnInit {

  pattern="/^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/";

  constructor(private router: Router, private formBuilder: FormBuilder, private http: Http, 
    private dataservice: dataService,  private authService: AuthService
  ) {  }

 
  ngOnInit() {
  }


  
  myform = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required),
    recaptcha:  new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    landline:  new FormControl('', [Validators.minLength(10), Validators.maxLength(11)]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    profileCreateBy: new FormControl('', Validators.required)
  });


  get firstName()
  {
    return this.myform.get("firstName");
  }
  get lastName()
  {
    return this.myform.get("lastName");
  }

  get mobile()
  {
    return this.myform.get("mobile");
  }
  get landline()
  {
    return this.myform.get("landline");
  }
  get gender()
  {
    return this.myform.get("gender");
  }

  get password()
  {
    return this.myform.get("password");
  }
  get confirmPassword()
  {
    return this.myform.get("confirmPassword");
  }
  get email()
  {
    return this.myform.get("email");
  }
  get recaptcha()
  {
   return this.myform.get("recaptcha");
  }
  get profileCreateBy()
  {
   return this.myform.get("profileCreateBy");
  }
  

genderList = [
  {id:1, name:'Male'},
  {id:2, name:'Female'}
];


profileCreatedByList = [
  {id:1, name:'Self'},
  {id:2, name:'Relative'},
  {id:3, name:'Brother'},
  {id:4, name:'Sister'},
  {id:5, name:'Father'},
  {id:6, name:'Mother'},
  {id:7, name:'Friend'},
  {id:8, name:'Others'}
];

onSubmit(data: any) {
  let url = "http://localhost:8910/Api/api/RegistrationBasic";

  let result= this.dataservice.Insert(url,data);

  //TODO: need to put if condition to check the result
  this.router.navigate(['/thanksregistration', data.email ]);
  //return result;
}

gotoLogin()
{
  this.router.navigate(['/login']);
}


}
