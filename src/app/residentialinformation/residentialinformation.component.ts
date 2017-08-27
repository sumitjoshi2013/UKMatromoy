import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";




@Component({
  selector: 'app-residentialinformation',
  templateUrl: './residentialinformation.component.html'
})
export class ResidentialinformationComponent implements OnInit {
  private router: Router;


    // Initialized to specific date (09.10.2018).
    private model: Object = { date: { year: 2018, month: 10, day: 9 } };
    
  constructor() { }

  ngOnInit() {
  }


  register() {
          this.router.navigate(['/RegistrationOTP']);
  }
}
