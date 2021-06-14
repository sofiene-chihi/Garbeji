import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  contact:boolean=true;
  links=["new-service", "provided-services", "old-services"] 
  constructor() { }

  ngOnInit(): void {
  }

  displayContact(){
    this.contact=!this.contact;
  }

}
