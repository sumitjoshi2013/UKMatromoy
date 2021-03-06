import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";
import { JsonpModule, Jsonp, Response, Http, RequestOptions,Headers,  RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Rx';  
import 'rxjs/Rx'; 

@Injectable()
export class dataService {

  constructor(private authHttp: AuthHttp, private http: Http) {
  }

  getMasterData11(id) { 
    var error: any;
    var url = 'http://localhost:8910/api/api/MasterData/'+ id;
    this.http.get(url).subscribe(res => console.log(res.json()));
}
private handleError (error: Response) {
  console.error(error);
  return Observable.throw(error.json().error || ' error');
}

            
 getData(Url) {
    
     //console.log(Url);
     let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
     let options = new RequestOptions({ headers: headers, method: "get"});
     return this.http.get(Url,  options)
           .map(res =>{
             let result = res.json()           
             if (result) {
                 return result; 
             }
             else
               {
                   return false; 
               }
           }
         )._catch(this.handleError);
   }              
 

   Insert(url, data) { 
  
    console.log(data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    let options = new RequestOptions({ headers: headers });
  //  console.log(url);
    url = `${url}/`;
    let result= this.http.post(url, JSON.stringify(data),options )
    .subscribe(res => res.json);
    return result;
   


    

  }



private handleError1(error: Response | any) {  
    // In a real world app, we might use a remote logging infrastructure  
    let errMsg: string;  
    if (error instanceof Response) {  
        const body = error.json() || '';  
        const err = body.error || JSON.stringify(body);  
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;  
    } else {  
        errMsg = error.message ? error.message : error.toString();  
    }  
    console.error(errMsg);  
    return Observable.throw(errMsg);  
}  
}





export class tbl_language {  
  languageID: number;  
  language: string;  

}  