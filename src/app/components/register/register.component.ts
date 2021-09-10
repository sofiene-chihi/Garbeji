import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormControl , Validators, FormBuilder} from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  result={status:true, message:""};
  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName:  new FormControl(''),
    phone: new FormControl(''),
    bio:  new FormControl(''),
    profession: new FormControl(''),
    stars: new FormControl(0),
    image: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private authService: AuthentificationService,private formBuilder: FormBuilder, private userService:UserService ) { }

  get f(){ return this.registerForm.controls; }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.minLength(4)]],
      bio: ['', [ Validators.minLength(4)]],
      profession: ['', [Validators.required, Validators.minLength(4)]],
      img_url: ['', [ Validators.minLength(4)]],
      stars: [0, [ Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
  });

  }


  onSubmit(){
    this.submitted = true;
    
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.authService.signUp(this.registerForm.value).subscribe((user)=>{
        console.log("user", user)
      })
      // this.authServ.login(this.loginForm.value).subscribe((res)=>{
      //    // localStorage.setItem('token', res["data"].token);
      //     console.log("loggedin")
      //     //this.router.navigate(['profile/2']); 
      // });
    } else{
      console.log(this.registerForm.valid);
      console.log(this.registerForm.value);
      console.warn("THERE S A PROBLEM");
    }
  }
}
