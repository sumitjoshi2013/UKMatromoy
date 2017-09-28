//http://valor-software.com/ng2-file-upload/
//https://plnkr.co/edit/hQ6RtzCfPosfQl4HlbZQ?p=preview
import { Component, ViewChild, OnInit, Input } from '@angular/core'; 
import { Headers, Http, RequestOptions } from '@angular/http'; 
 
import { NgForm, Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms'; 
import './fileupload.js'
import { Router } from '@angular/router';
import { dataService } from 'app/services/data.service';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs/Observable';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
  
})
export class FileuploadComponent implements OnInit{
  get name()
  {
   return this.myform.get("name");
  }
  get filename()
  {
   return this.myform.get("filename");
  }
  get IsProfilePic()
  {
   return this.myform.get("IsProfilePic");
  }

  ngOnInit() {
  }
    files: FileList; 
    filestring: string; 
    constructor(private router: Router, private formBuilder: FormBuilder, private http: Http, 
      private dataservice: dataService,  private authService: AuthService
    ) {  }

    isChecked = false;
    public message:string;
     toggle(){
        this.isChecked = !this.isChecked;
        console.log(  this.isChecked);
        if(this.isChecked)
          this.message = "Yes please, I want to make this image as a profile pic."
        else
          this.message = "No thanks, I dont want to make this image as a profile pic."
     }

    ProfilePicMessage(event)
    {
      console.log(event);

    }

    getFiles(event) { 
        this.files = event.target.files; 
        var reader = new FileReader(); 
        reader.onload = this._handleReaderLoaded.bind(this); 
        reader.readAsBinaryString(this.files[0]); 
        console.log(this.files[0]);
    } 
    myform = new FormGroup({
      name: new FormControl('', Validators.required),
      filename: new FormControl(''),
      IsProfilePic: new FormControl('')
    });
    upload(event)
    {
      this.files = event.target.files; 
      console.log("File: " + event.target.files);
    }

    _handleReaderLoaded(readerEvt) { 
        var binaryString = readerEvt.target.result; 
        this.filestring = btoa(binaryString);  // Converting binary string data. 
   } 
   @ViewChild("fileInput") fileInput;
public Message: string;

    logForm(data: any) { 
      //let url ="";
      console.log(this.myform);
      
      if (this.myform.valid) 
      { let fi = this.fileInput.nativeElement;
        let file: File = fi.files[0];  
        console.log(file);
      //  console.log(this.myform.controls.name.value);
        if(file === undefined)
        {
          this.Message="Please select the Image File.";
         // console.log(this.Message);
        }
        else
        {
          console.log("valid");
      let fileToUpload;
    //  console.log(this.myform.controls.name.value);
          
          let url = "http://localhost:8910/Api/api/Fileupload/Data";
          var UserProfilePicData = {
            "emailId": this.authService.currentUser.name,
            "PicName": file.name,
            "PicFilePath": this.myform.controls.name.value,
            "IsProfilePic": this.myform.controls.IsProfilePic.value
          } 
          console.log(UserProfilePicData);
          this.dataservice.Insert(url,UserProfilePicData);
        }
      }
    }  
    sendValues(name, password) { 
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers }); 
        this.http.post('server-url', JSON.stringify({ Username: name, FileData: this.filestring }), options).               // http post method to sending data 
            subscribe( 
            (data) => { 
              //  console.log('Response received'); 
            }, 
            (err) => { console.log(err); }, 
            () => console.log('Authentication Complete') 
            ); 
    }
    images = [
        {
          src: 'http://localhost/images/IMG_20170602_133107.jpg',
          text: 'City Sunset View'
        },
        {
          src: 'http://localhost/images/IMG_20170626_080941.jpg',
          text: 'Mountain'
        },
        {
          src: 'http://localhost/images/IMG_20170626_080945.jpg',
          text: 'Peacock'
        },
        {
          src: 'http://localhost/images/IMG_20170626_081205.jpg',
          text: 'Fire'
        },
        {
          src: 'http://localhost/images/IMG_20170602_133107.jpg',
          text: 'Nature'
        }
      ];
} 