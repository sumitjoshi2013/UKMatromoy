import { Injectable } from '@angular/core';
import {Http, URLSearchParams} from "@angular/http";
import 'rxjs/Rx';
//import { Country } from './country';
//import { State } from './state';
 
 
@Injectable()
export class TestService {
    constructor(public http: Http) {
        this.http = http;
    }
    getCountries() {
        let _InstUrl = "http://localhost:8910/api/api/MasterData?lookUpId=7"; 
        return this.http.get(_InstUrl)
            .map((responseData) => responseData.json());
    }
 
}