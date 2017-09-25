import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';
import { dataService } from 'app/services/data.service';



class userArray {
  constructor(public message: string, public profileid: string,
              public FULL_NAME: string, public status: string,
              public visitordate: string, public EmailId:string,
              public age: string, public maritialstatus: string,
              public gotra: string, public religion:string, 
              public VisitorID: string, public MY_OCCUPTION:string,
              public MY_SUB_CASTE:string
             
  ){}
}


@Component({
  selector: 'app-visitordetails',
  templateUrl: './visitordetails.component.html',
  styleUrls: ['./visitordetails.component.css']
})
export class VisitordetailsComponent implements OnInit {
  userData : userArray[]; 
  constructor(private authService: AuthService, private router: Router, 
    private dataservice: dataService
  
  ) { }

  ngOnInit() {
    let showInterest = "http://localhost:8910/api/api/VisitorDetails?userid="; 
    this.dataservice.getData(showInterest + this.authService.currentUser.name).
    subscribe((res: any) => 
    { this.userData = res });
  }
  Message(EmailId)
  {
    this.router.navigate(['profiledetail/', EmailId]);
  }

  GoToBack()
  {
    this.router.navigate(['/']);
  }
}
