import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private authServ : AuthentificationService
     //Add Toaster service
    //Add routing service
  ) { }

  ngOnInit(): void {
    
    
  }

  signUp(userData){
    this.authServ.signUp(userData).subscribe(
      (data) => {
        localStorage.setItem('token', data.accessToken);
        //add routing
        //Routes const is in environments.ts
        //this.router.navigate([ROUTES.home]);
        //add toaster
        // this.toaster.success('Welcome!');
      },
      
      (error) => {
        //Add toaster
        //this.toaster.error(error.error);
        console.log(error.error);
      }
    );
  }

}
