import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'menubar',
  templateUrl: 'header.component.html'
})
export class HeaderMenuComponent implements OnInit  {

  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    let Id = this.route.snapshot.params['Id'];
    console.log(Id);
    if(Id != 1)
    {
    if(this.authService.isLoggedIn() !=true)
    {
      this.logout();
    }
  }
  }
  
  gotoImage()
  {
   // this.router.navigate(['/Fileupload'],);
    window.location.href = "#/Fileupload";
  }

  logout()
  {
  //  console.log("logout button called...")
    this.authService.logout();
    this.router.navigate(['/login']);
    
  }
}
