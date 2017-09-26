import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks-registration-message',
  templateUrl: './thanks-registration-message.component.html',
  styleUrls: ['./thanks-registration-message.component.css']
})
export class ThanksRegistrationMessageComponent implements OnInit {
  

  constructor(private authService: AuthService,
    private router: Router, 
  ) { }

  ngOnInit() {
  }

Submit()
{
  this.router.navigate(['/editprofile', this.authService.currentUser.name]);

}

}
