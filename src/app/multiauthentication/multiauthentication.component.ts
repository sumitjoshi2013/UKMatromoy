import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'multiauthentication',
  templateUrl: './multiauthentication.component.html'
})
export class MultiauthenticationComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  gotoDashBoard()
    {
      this.router.navigate(['/']);

    }
}
