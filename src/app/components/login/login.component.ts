import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authServ: AuthentificationService 
    //Add Toaster service
    //Add routing service
   
    ) {}

  ngOnInit(): void {
   
  }

  login(credentials) {
    console.log(credentials);
   
    this.authServ.login(credentials).subscribe(
      (data)=> {
        localStorage.setItem('token', data.accessToken);
        //add routing
        //Routes const is in environments.ts
        //this.router.navigate([ROUTES.home]); 
        //this.toaster.success('Welcome Back!');
        
        },
      
      (error)=> {
        //Add toaster
        //this.toaster.error(error.error);
        console.log(error.error);
        
      }
      
      
      
    );
  }
}


