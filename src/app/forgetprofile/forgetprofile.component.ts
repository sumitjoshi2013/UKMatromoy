import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {
    ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
import { dataService } from 'app/services/data.service';
import { AuthService } from 'app/services/auth.service';


export interface FormModel {
  captcha?: string;
}

class userArray {
  constructor(public message: string
             
  ){}
}

@Component({
  selector: 'app-forgetprofile',
  templateUrl: './forgetprofile.component.html'
})
export class ForgetprofileComponent implements OnInit {
  
  forgetpwd = new FormGroup({
    email: new FormControl('', Validators.required),
    recaptcha:  new FormControl('', Validators.required)
  });

  
  get email()
  {
   return this.forgetpwd.get("email");
  }

  get recaptcha()
  {
   return this.forgetpwd.get("recaptcha");
  }

  userData : userArray[];
  
 
  constructor(private router: Router,
    private dataservice: dataService,  private authService: AuthService
  ) { }
 
  ngOnInit() {
    
  }
    SendMail(data)
    {
      console.log(data.email);
      if (this.forgetpwd.valid) 
      {
      let emailId = data.email;
      let Url = "http://localhost:8910/api/api/Registration/GetForgetUser?emailid="; 
      this.dataservice.getData(Url + emailId ).subscribe((res: any) => 
      { this.userData = res });
      }
    }
}
