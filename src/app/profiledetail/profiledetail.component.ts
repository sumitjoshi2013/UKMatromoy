import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from './../services/auth.service';
import { MdGridListModule} from '@angular/material';
import { dataService } from "app/services/data.service";
import { Jsonp } from '@angular/http';

class arrayData {
  constructor(public USER_ID: number, 
              public FULL_NAME: string, 
              public DOB: string,   
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
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent implements OnInit {
  userData: object;
  private profileId;
  constructor(private authService: AuthService, private router: Router, 
  private dataservice: dataService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.profileId = this.route.snapshot.params['profileId'];
  // console.log(this.profileId);
    let Url = "http://localhost:8910/api/api/ShowProfile/ShowUserProfileByUniqueId?userid="; 
    this.dataservice.getData(Url + this.profileId ).subscribe((res: any) => 
    { this.userData = res });

   
  }
}