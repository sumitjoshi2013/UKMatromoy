import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-searchprofiles',
  templateUrl: './searchprofiles.component.html',
  styleUrls: ['./searchprofiles.component.css']
})
export class SearchprofilesComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  Viewdetail(event)
  {
    this.router.navigate(['/#/profiledetail']);
  }

}
