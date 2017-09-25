import { AuthService } from './../services/auth.service';
import { Component,ViewChild , OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {MdDialog, MdDialogRef,  MD_DIALOG_DATA} from '@angular/material';
import { ForgetprofileComponent } from 'app/forgetprofile/forgetprofile.component';

export interface FormModel {
  captcha?: string;
}


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
   styles: [`
      .error { color: crimson; }
      .success { color: green; }
  ` ]
})
export class LoginComponent  implements OnInit {
  ngOnInit() {
    
   }
  invalidLogin: boolean; 
  @ViewChild('f') form: any;
public formModel: FormModel = {};

  constructor(
    private router: Router, 
    private authService: AuthService,
    public dialog: MdDialog
  ) { }

    signIn(credentials) {
    if (this.form.valid) 
  {
    this.authService.login(credentials)
    .subscribe(result => { 
        if (result)
          {
          this.router.navigate(['/']);
          }else
          {  
          this.invalidLogin = true; 
          }
      });
   }
    }

ForgetPwd()
{
  let dialogRef = this.dialog.open(ForgetprofileComponent, {
    width: '750px'//,
    //data: { userid: value.USER_PEROFILE_ID}
  });

}
}

