import { Component, OnInit } from '@angular/core';
import { dataService } from 'app/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { WebApiObservableService } from 'app/services/dataservices.service';

class imageData {
  constructor(public id: number, public src: string, 
    public text: string
  ){}
}

@Component({
  selector: 'app-deletepic',
  templateUrl: './deletepic.component.html',
  styleUrls: ['./deletepic.component.css']
})
export class DeletepicComponent implements OnInit {
  images : imageData[]; 
  constructor(  private dataservice: dataService, private router: Router, 
    private formBuilder: FormBuilder, private authService: AuthService,
    private picObservableService: WebApiObservableService
  ) { }

  
  ngOnInit() {
    
      let Url = "http://localhost:8910/api/api/Fileupload/GetUserPics?emailid="+this.authService.currentUser.name; 
      console.log(Url);
      this.dataservice.getData(Url).subscribe((res: any) => { this.images = res });
      }

  private errorMessage: string;
  private resultMessage: string;
  delPics(id)
  {

    var UpdateUserPics = {
      "PicId": id
    } 
    console.log(UpdateUserPics);
/*
    this.picObservableService
    .deleteServiceWithId('http://localhost:8910/Api/api/Fileupload/Delete', "PicId", id)
    .subscribe(
        result => this.resultMessage = result,
        error => this.errorMessage = error
); 
*/

this.picObservableService
.postService('http://localhost:8910/Api/api/Fileupload/Delete',UpdateUserPics)
.subscribe(
    result =>console.log(result),
    error => this.errorMessage = error
); 

//console.log("Result: " + this.resultMessage);
//console.log("Error Result: " + this.errorMessage);
/*
    let url = "http://localhost:8910/Api/api/Fileupload/Delete";
    var UpdateUserPics = {
      "PicId": id
    } 
    //console.log(UpdateUserPics);
    this.dataservice.Insert(url,UpdateUserPics);
  */  
  }

  SetProfilePic(id)
  {
    let url = "http://localhost:8910/Api/api/Fileupload/Update";
    this.dataservice.Insert(url,id);
  }
  
}
