import { JsonpModule, Jsonp, Response,Http,Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Injectable } from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'; 

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
  
  login(credentials) {
   
    let user = credentials.email;
    let password = credentials.password;
    // console.log(credentials);
    let _InstUrl = "http://localhost:8910/api/api/Token?username="+user+"&password="+password+""; 
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

  getMasterData11(id) { 

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

