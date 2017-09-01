import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt/angular2-jwt";

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() { 
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }

  Insert(data) { 
    return this.authHttp.post('/api/Registration',data)
      .map(response => response.json());
  }

}
