import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LaborService } from 'src/app/services/labor.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  links=["new-service", "provided-services"] 


  constructor(private laborService: LaborService) { }

  ngOnInit(): void {
   // this.refresh();
  }



  
  
}
