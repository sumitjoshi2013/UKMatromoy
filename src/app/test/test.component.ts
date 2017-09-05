import { Component, OnInit } from '@angular/core';
import {TestService} from './test.service'
import { dataService } from "app/services/data.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  countries: Country[];
  constructor(private _dataService: dataService) {
}
  ngOnInit() {
   // this._dataService.getMasterData(7).subscribe(data => { this.countries = data });
  }
}
export class Country {
  constructor(public id: number, public name: string) { }
}