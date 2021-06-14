import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  contact:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  displayContact(){
    this.contact=!this.contact;
  }

}
