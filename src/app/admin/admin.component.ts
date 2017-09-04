import { dataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  orders: any[];

  constructor(private orderService: dataService) { }

  ngOnInit() {
   // this.orderService.getMasterData(1)
     // .subscribe(orders => this.orders = orders);
  }
}
