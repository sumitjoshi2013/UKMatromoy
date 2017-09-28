import { Component, OnInit } from '@angular/core';
import { dataService } from 'app/services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  myform = new FormGroup({
   
  });
  
  ngOnInit() {
    
      let Url = "http://localhost:8910/api/api/Fileupload/GetUserPics?emailid="+this.authService.currentUser.name; 
     // console.log(Url);
      this.dataservice.getData(Url).subscribe((res: any) => { this.images = res });
      }

  private errorMessage: string;
  private resultMessage: string;
  delPics(id)
  {

    var UpdateUserPics = {
      "PicId": id
    } 
 


this.picObservableService
.postService('http://localhost:8910/Api/api/Fileupload/Delete',UpdateUserPics)
.subscribe(
    result =>console.log(result),
    error => this.errorMessage = error
); 

  }

  SetProfilePic(id)
  {
    let url = "http://localhost:8910/Api/api/Fileupload/Update";
    this.dataservice.Insert(url,id);
  }
  
}
