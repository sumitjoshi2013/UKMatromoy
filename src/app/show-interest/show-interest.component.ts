import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-interest',
  templateUrl: './show-interest.component.html',
  styleUrls: ['./show-interest.component.css']
})
export class ShowInterestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  interestList = [
    {id:5000, name:'Accept'},
    {id:5001, name:'Reject'},
];
}
