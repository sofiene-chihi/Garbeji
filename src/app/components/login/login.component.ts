import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl , Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authServ: AuthentificationService,
    private formBuilder: FormBuilder,        
    private router:Router ) {}

    submitted:boolean = false;
   
    loginForm = new FormGroup({ 
      email: new FormControl('' ),
      password: new FormControl(''),
    });
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],

  })
  }

  get f(){ return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;
    
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      
      // this.authServ.login(this.loginForm.value).subscribe((res)=>{
      //    // localStorage.setItem('token', res["data"].token);
      //     console.log("loggedin")
      //     //this.router.navigate(['profile/2']); 
      // });
    } else{
      console.log(this.loginForm.valid);
      console.log(this.loginForm.value);
      console.warn("THERE S A PROBLEM");
    }
  }
  

}


