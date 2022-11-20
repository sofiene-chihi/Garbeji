import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const BASE_URL="http://localhost:3000/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private http: HttpClient
    ) { }

  login(credentials): Observable<any>{
    
    return this.http.post<any>(`${BASE_URL}/login`, credentials);
  }

  signUp(userData) {
    //return this.http.post<any>(`${BASE_URL}signup`, userData);
    return this.http.post<any>(`${BASE_URL}/register`, userData);

  }

  logout(): void{
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

}
