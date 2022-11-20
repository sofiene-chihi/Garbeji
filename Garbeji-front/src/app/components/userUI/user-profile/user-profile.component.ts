import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaborService } from 'src/app/services/labor.service';
import { FormGroup,FormControl , Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  links=["new-service", "provided-services"] 
  profile;
  submitted=false;
  profileForm = new FormGroup({
    firstname: new FormControl(''), 
    lastname: new FormControl(''), 
    profession: new FormControl(''), 
    phone: new FormControl(''), 
    email: new FormControl(''),

  });


    constructor(private userService:UserService,  private formBuilder: FormBuilder, private route: ActivatedRoute) { }


  get f(){
    return this.profileForm.controls; 
    }

  onSubmit(profileForm:any , formDirective:FormGroupDirective){ 
    this.submitted=true;
    if(this.profileForm.valid){
      console.log("this is valid");
      this.save(this.profileForm.value , profileForm,formDirective);
   }else{
    console.log(this.profileForm.valid)
    console.warn("THERE S A PROBLEM");
  }

  }

  save(newUser, profileForm:any , formDirective:FormGroupDirective){
    this.userService.editUser(this.profile.id , newUser).subscribe(res =>
      {
        console.log("updated succesfully")
        console.log(res);
        this.submitted=false;
        
        if (res["code"]===200){
          
        }
      })
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.userService.getUserById(id).subscribe(res=> {
    this.profile=res;
    this.profileForm = this.formBuilder.group({
      firstname:[this.profile.firstName ,  [Validators.required ,  Validators.maxLength(30)]], 
      lastname:[this.profile.lastName ,  [Validators.required ,  Validators.maxLength(30)]], 
      profession:[this.profile.profession ,  [Validators.required ,  Validators.maxLength(30)]], 
      phone:[this.profile.phone ,  [Validators.required,Validators.minLength(8) , Validators.maxLength(8) ,  Validators.pattern('^[0-9]*$') ]],
      email: [this.profile.email, [Validators.required, Validators.email]],
    })
    console.log(this.profile)
  
    })

  }



  
  
}
