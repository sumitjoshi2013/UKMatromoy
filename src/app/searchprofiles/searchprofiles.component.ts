import { Component, OnInit } from '@angular/core';
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
              public JsonRawData: string,   
              public USER_PEROFILE_ID: number){}
}

@Component({
  selector: 'app-searchprofiles',
  templateUrl: './searchprofiles.component.html',
  styleUrls: ['./searchprofiles.component.css']
})
export class SearchprofilesComponent implements OnInit {
  userData: arrayData[];
  data: jsonArray[];

  constructor(private authService: AuthService, private router: Router, 
    private dataservice: dataService) {}

  ngOnInit() {
    let Url = "http://localhost:8910/api/api/Registration"; 
    this.dataservice.getData(Url).subscribe((res: any) => { this.userData = res });
  
   
  }

  Viewdetail(event)
  {
    this.router.navigate(['/#/profiledetail']);
  }

  

}
