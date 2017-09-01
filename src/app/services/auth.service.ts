import { 
  JsonpModule, Jsonp, Response,
  Http,Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 

import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx'; 
class SearchItem {
  constructor(public email: string,
              public password: string,
              public token: string
              ) {
  }
}

@Injectable()
export class AuthService 
{
  currentUser: any; 
apiRoot: string = 'http://localhost:6284/api/Token';

  constructor(private http: Http, private jsonp: Jsonp) 
  {

    let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }
  }

   private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }
  private results: Observable<SearchItem[]>;


  login(credentials) {
    /*
let params1 = new URLSearchParams();
//params.set('search', term); // the user's search value
//params.set('action', 'opensearch');
params1.set('format', 'json');
//params1.set('callback', "ng_jsonp.__req0.finished");
params1.set('callback', "JSONP_CALLBACK");

    let data = JSON.stringify(credentials);
     let user = credentials.email;
     let password = credentials.password;
     console.log(user);
    let apiURL = `${this.apiRoot}?username= ${user}&password=${password}`; 
    return this.jsonp.get(apiURL, { search: params1 })  
        .map(res => {
          return res.json().results.map(item => {
            let result = item.json()      
            if (result) {
                localStorage.setItem('token', result);
                console.log("result: " + result);
                let jwt = new JwtHelper();
                this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
                console.log("currentUser: " + this.currentUser);
                return true; 
                    }
            else
              {
                console.log("Error:...");
                localStorage.removeItem('token');
                 this.currentUser = null;
                  return false; 
              }
          });
        });
  //}
    */  
    
    let user = credentials.email;
     let password = credentials.password;
    // console.log(credentials);
     let _InstUrl = "http://localhost:8010/api/Token?username="+user+"&password="+password+""; 
    //console.log(_InstUrl);
let data = JSON.stringify(credentials); //[{"email": "sumit.joshi"}, {"password": "pwd"}];

 let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  let options = new RequestOptions({ headers: headers, method: "get"});
      return this.http.get(_InstUrl,  options)
          .map(res =>{
            let result = res.json()           
         // console.log(result);
          //
            if (result) {
                localStorage.setItem('token', result);
               // console.log("result: " + result);
                let jwt = new JwtHelper();
                this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
             //   console.log("currentUser: " + localStorage.getItem('token'));
                console.log("currentUser email: " + this.currentUser.name);
                return true; 
                    }
            else
              {
                localStorage.removeItem('token');
                 this.currentUser = null;
                  return false; 
              }
          }
                
        )._catch(this.handleError);
        
  }              
  

  logout() { 
    console.log("Service logout button called...");
    localStorage.removeItem('token');
    this.currentUser = null;
  }

  isLoggedIn() { 
    return tokenNotExpired('token');
  }
}

