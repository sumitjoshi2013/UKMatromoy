import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from './../services/auth.service';
import { MdGridListModule} from '@angular/material';
import { dataService } from "app/services/data.service";
import { Jsonp } from '@angular/http';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule, Modal, bootstrap4Mode } from 'ngx-modialog/plugins/bootstrap';
import { ShowInterestComponent } from './../show-interest/show-interest.component';
import {MdDialog, MdDialogRef,  MD_DIALOG_DATA} from '@angular/material';

class arrayData {
  constructor(public USER_ID: number, 
              public FULL_NAME: string, 
              public DOB: string,   
              
              public TIME: string,   
              public MY_NATIVE_PLACE: string,   
              
              public CALCULATED_AGE: string,  
              public GENDER: string,  
              public MY_SUB_CASTE: string, 
              public MY_GOTHRA: string, 
              public MY_OCCUPTION: string, 
              public MY_RELIGION: string, 
              public JsonRawData: string, 
              
              public ABOUT_MY_EDUCATION: string,
              public HEIGHT: string,  
              public WEIGHT: string, 
              public SMOKE_STATUS: string, 
              public DRINK_STATUS: string, 
              public MY_WORK_STATUS: string, 
              public ABOUT_ME: string,

              public FACEBOOK_ID: string, 
              public TWITTER_ID: string, 
              public Linkedin: string,
              public MY_MIN_INCOME: string,
              
              public COUNTRY: string, 
              public CITY: string, 
              public address: string,


            

              public MY_MOTHER_TOUNG: string,
              public USER_PEROFILE_ID: number){}
}

@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent implements OnInit {
  userid: number;
  userData: object;
  private profileId;
  interestStatus: boolean;
  constructor(private authService: AuthService, private router: Router, 
  private dataservice: dataService, private route: ActivatedRoute,
  public modal: Modal, public dialog: MdDialog
) {}

  ngOnInit() {
    this.interestStatus = true;
    this.profileId = this.route.snapshot.params['profileId'];
    if(this.profileId == null)
    {
      this.interestStatus = false;
      let Url = "http://localhost:8910/api/api/ShowProfile/ShowUserProfileByUniqueId?userid="; 
      this.dataservice.getData(Url + this.authService.currentUser.name ).subscribe((res: any) => 
      { this.userData = res });
    }
    else
    {
      this.interestStatus = true;
      let Url = "http://localhost:8910/api/api/ShowProfile/ShowUserProfileByUniqueId?userid="; 
      this.dataservice.getData(Url + this.profileId ).subscribe((res: any) => 
      { this.userData = res });
    }
   console.log(this.interestStatus);
  
  }
  
  Message(value): void
  {
   console.log(value.USER_PEROFILE_ID);
    let dialogRef = this.dialog.open(ShowInterestComponent, {
      width: '850px',
      data: { userid: value.USER_PEROFILE_ID}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    //  this.animal = result;
    });
  }
  GoToSocial(Url)
  {
    let url: string = '';
    if (!/^http[s]?:\/\//.test(Url)) {
        url += 'http://';
    }
    
    url += Url;
    window.open(url, '_blank');
  }
}