//http://valor-software.com/ng2-file-upload/
//https://plnkr.co/edit/hQ6RtzCfPosfQl4HlbZQ?p=preview
import { Component } from '@angular/core'; 
import { Headers, Http, RequestOptions } from '@angular/http'; 
 
import { NgForm } from '@angular/forms'; 
import './fileupload.js'
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
  
})
export class FileuploadComponent {
    files: FileList; 
    filestring: string; 
    constructor(public http: Http) { 
    } 
    getFiles(event) { 
        this.files = event.target.files; 
        var reader = new FileReader(); 
        reader.onload = this._handleReaderLoaded.bind(this); 
        reader.readAsBinaryString(this.files[0]); 
    } 
 
    _handleReaderLoaded(readerEvt) { 
        var binaryString = readerEvt.target.result; 
        this.filestring = btoa(binaryString);  // Converting binary string data. 
   } 
    logForm(form: NgForm) { 
        console.log("Name: " + form.name + "Files: " + this.files[0].name); 
        
        
       // this.sendValues(form.name, form.password); 
    } 
    sendValues(name, password) { 
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers }); 
        this.http.post('server-url', JSON.stringify({ Username: name, FileData: this.filestring }), options).               // http post method to sending data 
            subscribe( 
            (data) => { 
                console.log('Response received'); 
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
