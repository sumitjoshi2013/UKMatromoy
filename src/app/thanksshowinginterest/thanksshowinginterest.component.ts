import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import { dataService } from 'app/services/data.service';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';


class arrayData {
  constructor(public USER_ID: number, 
              public FULL_NAME: string, 
              public DOB: string,   
              public E_MAIL: string,   
              public CALCULATED_AGE: string,  
              public GENDER: string,  
              public MY_SUB_CASTE: string, 
              public MY_GOTHRA: string, 
              public MY_OCCUPTION: string, 
              public MY_RELIGION: string, 
              public JsonRawData: string,   
              public USER_PEROFILE_ID: number){}
}


@Component({
  selector: 'app-thanksshowinginterest',
  templateUrl: './thanksshowinginterest.component.html',
  styleUrls: ['./thanksshowinginterest.component.css']
})
export class ThanksshowinginterestComponent implements OnInit {
  userData: arrayData[];
  constructor(private dataservice: dataService, private router: Router) { }

  ngOnInit() {
    //let Url = "http://localhost:8910/api/api/Registration?id="; 
   // this.dataservice.getData(Url).subscribe((res: any) => { this.userData = res });

  }

  gotoBack()
  {
    this.router.navigate(['']);
  }

}
