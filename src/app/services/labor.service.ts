import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})

export class LaborService {

  constructor(private http:HttpClient) { }


  all(){
    return  this.http.get(`${URL}/services`);
  }

  deleteService(id){
    return  this.http.delete(`${URL}/services/${id}`);
  }

  addService(newService){
    return  this.http.post(`${URL}/services`, newService);
  }
}
