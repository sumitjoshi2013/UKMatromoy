import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration-thanks',
  templateUrl: './registration-thanks.component.html'
})
export class RegistrationThanksComponent implements OnInit {
  private router: Router;

  constructor() { }

  ngOnInit() {
  }
//RegistrationOTP

  register() {
          this.router.navigate(['/Fileupload']);
  }
}
