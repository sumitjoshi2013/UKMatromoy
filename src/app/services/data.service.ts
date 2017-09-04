import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";
import { JsonpModule, Jsonp, Response, Http, RequestOptions,
  Headers,  RequestMethod
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
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
//private results: Observable<SearchItem[]>;
            
 getMasterData(id) {
     let _InstUrl = "http://localhost:8910/api/api/MasterData?lookUpId="+id; 
     //console.log(_InstUrl);
     let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
     let options = new RequestOptions({ headers: headers, method: "get"});
     return this.http.get(_InstUrl,  options)
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
 

   Insert(data) { 
    return this.authHttp.post('/api/Registration',data)
      .map(response => response.json());
  }


}
