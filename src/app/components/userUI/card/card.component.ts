import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  contact:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }
  displayContact(){
    this.contact=!this.contact;
  }

}
