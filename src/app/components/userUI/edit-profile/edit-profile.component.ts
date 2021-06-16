import { Component, OnInit } from '@angular/core';
import {User} from '../../../Models/User.model';
import { FormGroup,FormControl , Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private userService:UserService,  private formBuilder: FormBuilder) { }


 
 



  ngOnInit(): void {
   
  }

}
