import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './../services/auth.service';
import {MdGridListModule} from '@angular/material';
import { dataService } from "app/services/data.service";
import {Jsonp } from '@angular/http';

class jsonArray
{
  constructor(public USER_ID: string, 
    public firstName: string,   
    public lastName: string){}
}

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
  selector: 'app-searchprofiles',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './searchprofiles.component.html',
  styleUrls: ['./searchprofiles.component.css']
})
export class SearchprofilesComponent implements OnInit {
  userData: arrayData[];
  data: jsonArray[];

  constructor(private authService: AuthService, private router: Router, 
    private dataservice: dataService) {}

  ngOnInit() {
    let Url = "http://localhost:8910/api/api/Registration?emailid="; 
    this.dataservice.getData(Url + this.authService.currentUser.name ).subscribe((res: any) => { this.userData = res });
  }

  Viewdetail(userid)
  {
    console.log(userid);
    
    this.router.navigate(['profiledetail/', userid]);
  }

  

}
