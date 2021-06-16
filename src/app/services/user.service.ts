import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:3000"
 

@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  constructor(private http:HttpClient) { }

  all(){
    return  this.http.get(`${URL}/users`);
  }

  addUser(newUser){
    return  this.http.post(`${URL}/users`, newUser);
  }

  getUserById(id){
    return  this.http.get(`${URL}/users/${id}`);

  }

  editUser(id, user){
    return this.http.put(`${URL}/users/${id}`, user)
  }


}
