import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletepic',
  templateUrl: './deletepic.component.html',
  styleUrls: ['./deletepic.component.css']
})
export class DeletepicComponent {
  constructor() { }

  delPics(id)
  {
    console.log(id);
  }

  images = [
    {
      id: '1',
      src: 'http://localhost/images/IMG_20170602_133107.jpg',
      text: 'City Sunset View'
    },
    {
      id: '2',
      src: 'http://localhost/images/IMG_20170626_080941.jpg',
      text: 'Mountain'
    },
    {
      id: '3',
      src: 'http://localhost/images/IMG_20170626_080945.jpg',
      text: 'Peacock'
    },
    {
      id: '4',
      src: 'http://localhost/images/IMG_20170626_081205.jpg',
      text: 'Fire'
    },
    {
      id: '5',
      src: 'http://localhost/images/IMG_20170602_133107.jpg',
      text: 'Nature'
    }
  ];
}
