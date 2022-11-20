import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:3000"
 

@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  constructor(private http:HttpClient) { }

  all(){
    return  this.http.get(`${URL}/users/all`);
  }

  getUserById(id){
    return  this.http.get(`${URL}/users/${id}`,{
      headers :
      { Authorization: `Bearer ${localStorage.getItem("token")}` } 
      
    });

  }

  editUser(id, user){
    return this.http.put(`${URL}/users/${id}`, user)
  }


}
