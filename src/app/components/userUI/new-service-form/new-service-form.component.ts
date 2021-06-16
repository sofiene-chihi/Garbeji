import { Component, OnInit } from '@angular/core';
import { LaborService } from 'src/app/services/labor.service';
import { FormGroup,FormControl , Validators, FormBuilder, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-new-service-form',
  templateUrl: './new-service-form.component.html',
  styleUrls: ['./new-service-form.component.css']
})
export class NewServiceFormComponent implements OnInit {

  submitted:boolean = false;

  newServiceForm = new FormGroup({
    name: new FormControl(''), 
    category: new FormControl(''), 
    worktime: new FormControl(''), 
    price: new FormControl(0 ),
    availability: new FormControl(true ),
    description: new FormControl(''),
  });


  constructor(private formBuilder: FormBuilder , private laborService:LaborService) { }



  get f() { return this.newServiceForm.controls; }

  onSubmit(newServiceForm:any , formDirective:FormGroupDirective){ 
    this.submitted=true;
    if(this.newServiceForm.valid){
      console.log("it is valid")
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newServiceForm.value, null, 4));
      this.save(this.newServiceForm.value , newServiceForm,formDirective);
    }else{
    console.log(this.newServiceForm.controls);
    console.log(this.newServiceForm.valid);
    console.warn("THERE S A PROBLEM");
  }


    // display form values on success
  }

  save(newService, newServiceForm:any , formDirective:FormGroupDirective){
    this.laborService.addService(newService).subscribe(res =>
      {
        
        console.log(res);
        this.submitted=false;

        if (res["code"]===200){
          
        }
      })
  }




  ngOnInit(): void {


    this.newServiceForm = this.formBuilder.group({
      name:['' ,  [Validators.required ,  Validators.maxLength(30)]], 
      category:['',  [Validators.required ,  Validators.maxLength(30)]], 
      worktime:['',  [Validators.required ,  Validators.maxLength(30)]], 
      price:['',  [Validators.required]],
      availability: [true],
      description: ['', [  Validators.maxLength(220)]],
    
    })

  }

}
