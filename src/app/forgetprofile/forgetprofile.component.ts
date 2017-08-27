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


export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-forgetprofile',
  templateUrl: './forgetprofile.component.html'
})
export class ForgetprofileComponent implements OnInit {
public formModel: FormModel = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }
gotoLogin()
    {
      this.router.navigate(['/login']);

    }
}
