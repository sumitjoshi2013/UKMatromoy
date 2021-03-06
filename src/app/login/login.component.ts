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
      .subscribe( result => { 
       //  console.log(result);

         if (result)
         {
       //   console.log('Test User' + this.authService.currentUser.admin);
            if(this.authService.currentUser.admin == "true")
            {
              this.router.navigate(['/']);
            }
            else
            {
             // console.log('Updated Profile');
             // ..this.router.navigate(['/registerprofile', this.authService.currentUser.name]);
              this.router.navigate(['/thanksregistration', this.authService.currentUser.name ]);
            }
         }
         else
         {  
         this.invalidLogin = true; 
         }
     });

      
     }


    //console.log("HiL" +  this.authService.currentUser.admin);
   }
  

ForgetPwd()
{
  let dialogRef = this.dialog.open(ForgetprofileComponent, {
    width: '750px'//,
    //data: { userid: value.USER_PEROFILE_ID}
  });

}
}

