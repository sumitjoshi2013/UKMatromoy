import { AuthService } from './../services/auth.service';
import { Component,ViewChild , OnInit} from '@angular/core';
import { Router } from "@angular/router";

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
    private authService: AuthService) { }

    signIn(credentials) {
  //  console.log(credentials);
  if (this.form.valid) 
  {
    //this.router.navigate(['/multiauth']);
    
    this.authService.login(credentials)
    .subscribe(result => { 
      
        if (result)
        //if (true)
          {
  //  console.log(this.form.valid);
    
          this.router.navigate(['/']);
          }else
          {  
          this.invalidLogin = true; 
          }
      });

     }
    }

  }

