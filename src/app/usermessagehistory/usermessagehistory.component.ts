import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { HeaderMenuComponent } from '../header/header.component';
import { Router } from "@angular/router";
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

  constructor(private authService: AuthService, private router: Router, private dataservice: dataService  ) 
  { }
  MessageData : arrayData[]; 
  ngOnInit() {
    let Url = "http://localhost:8910/api/api/UserMessages?InterestId="; 
    this.dataservice.getData(Url + 1).subscribe((res: any) => { this.MessageData = res });
  }

}
