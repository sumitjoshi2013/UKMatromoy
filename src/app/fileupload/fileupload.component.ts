//http://valor-software.com/ng2-file-upload/
//https://plnkr.co/edit/hQ6RtzCfPosfQl4HlbZQ?p=preview
import { Component, ViewChild } from '@angular/core'; 
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
export class FileuploadComponent {
    files: FileList; 
    filestring: string; 
    constructor(private router: Router, private formBuilder: FormBuilder, private http: Http, 
      private dataservice: dataService,  private authService: AuthService
    ) {  }
    getFiles(event) { 
        this.files = event.target.files; 
        var reader = new FileReader(); 
        reader.onload = this._handleReaderLoaded.bind(this); 
        reader.readAsBinaryString(this.files[0]); 
        console.log(this.files[0]);
    } 
    myform = new FormGroup({
      name: new FormControl('', Validators.required),
      myfile: new FormControl('', Validators.required),
    });

   
    
    upload(event)
    {
      this.files = event.target.files; 
      //var reader = new FileReader(); 
      //reader.onload = this._handleReaderLoaded.bind(this); 
      //reader.readAsBinaryString(this.files[0]); 
      console.log("File: " + event.target.files);
    }

    _handleReaderLoaded(readerEvt) { 
        var binaryString = readerEvt.target.result; 
        this.filestring = btoa(binaryString);  // Converting binary string data. 
   } 
   @ViewChild("fileInput") fileInput;

    logForm(data: any) { 
      //let url ="";
    
      let fileToUpload;
      let fi = this.fileInput.nativeElement;
/*
      if (fi.files && fi.files[0]) 
      {
        fileToUpload = fi.files[0];

        var UserProfilePicData = {
          "emailId": this.authService.currentUser.name,
          "PicName": fileToUpload.name
        } 
        let formData: FormData = new FormData();  
        formData.append('uploadFile', fileToUpload, fileToUpload.name);  
        let headers = new Headers()  

        console.log(formData); 
        this.dataservice.Insert(url,formData);
          }
*/

          let file: File = fi.files[0];  
          let formData: FormData = new FormData();  
          formData.append('uploadFile', file, file.name);  
          formData.append('fileTitle',  "sumit");  
          let headers = new Headers()  
          //headers.append('Content-Type', 'json');  
          //headers.append('Accept', 'application/json');  
          let options = new RequestOptions({ headers: headers });  
          let apiUrl1 = "http://localhost:8910/Api/api/Fileupload/File";  
          this.http.post(apiUrl1, formData, options)  
          .map(res => res.json())  
          .catch(error => Observable.throw(error))  
          .subscribe(  
          data => console.log('success'),  
          error => console.log(error)  
          )  

          let url = "http://localhost:8910/Api/api/Fileupload/Data";
          var UserProfilePicData = {
            "emailId": this.authService.currentUser.name,
            "PicName": file.name,
            "IsProfilePic": 1
          } 

          this.dataservice.Insert(url,UserProfilePicData);
    }  

     
        
        
       // this.sendValues(form.name, form.password); 
  
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
