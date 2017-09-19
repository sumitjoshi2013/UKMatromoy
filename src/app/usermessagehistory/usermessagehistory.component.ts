import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HeaderMenuComponent } from '../header/header.component';
import { Router, ActivatedRoute } from "@angular/router";
import { dataService } from "app/services/data.service";


class arrayData {
  constructor(public message: string, public message_send_date: string,
              public message_sender: string
  ){}
}


@Component({
  selector: 'app-usermessagehistory',
  templateUrl: './usermessagehistory.component.html',
  styleUrls: ['./usermessagehistory.component.css']
})
export class UsermessagehistoryComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, 
    private dataservice: dataService, private route: ActivatedRoute  ) 
  { }

  MessageData : arrayData[]; 
  ngOnInit() {
    let profileId = this.route.snapshot.params['profileId'];
    let messageStatusId = this.route.snapshot.params['messageStatusId'];
    let Url;// = "http://localhost:8910/api/api/UserMessages/UserLogMessages?ResponderEmailId="; 
    let param;
    if(messageStatusId==1)
    {
      Url = "http://localhost:8910/api/api/UserMessages/UserLogReqSendMessages?ResponderEmailId=";
      param = Url+ profileId;
    }
    if(messageStatusId==2)
    {
      Url = "http://localhost:8910/api/api/UserMessages/UserLogReqReceivedMessages?ResponderEmailId=";
      param = Url+ profileId;
    }

    if(messageStatusId==null)
    {
      Url = "http://localhost:8910/api/api/UserMessages/UserLogMessages?ResponderEmailId=";
      param = Url+profileId;
    }
console.log(param);
    this.dataservice.getData(param).subscribe((res: any) => { this.MessageData = res });
  }

  gotoBack()
  {
    this.router.navigate(['/']);
    
  }

}
