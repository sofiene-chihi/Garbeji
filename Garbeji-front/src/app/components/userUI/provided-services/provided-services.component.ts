import { Component, OnInit } from '@angular/core';
import { LaborService } from 'src/app/services/labor.service';

@Component({
  selector: 'app-provided-services',
  templateUrl: './provided-services.component.html',
  styleUrls: ['./provided-services.component.css']
})
export class ProvidedServicesComponent implements OnInit {
  services;
  buttons=["Show details"]

  dataModel = [{
    title: '#',
    key: 'id'
  },
  {
    title: 'name',
    key: 'name'
  },
  {
    title: 'category',
    key: 'category'
  },
  {
    title: 'worktime',
    key: 'worktime'
  },
  ,
  {
    title: 'price',
    key: 'price'
  },

  
  ]

  constructor(private laborService:LaborService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.laborService.all().subscribe(res=> {

      this.services=res ;
    })
  }

  deleteService(id){
    console.log(id)
    this.laborService.deleteService(id).subscribe(res=>{
      console.log("deleted");
      this.refresh();
    })
  }
}
