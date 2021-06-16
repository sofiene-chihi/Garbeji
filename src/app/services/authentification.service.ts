import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  
  constructor(
    private http: HttpClient
    ) { }

  login(credentials): Observable<any>{
    
    return this.http.post<any>(`${BASE_URL}login`, credentials);
  }

  signUp(userData) : Observable<any>{
    return this.http.post<any>(`${BASE_URL}signup`, userData);
  }

  logout(): void{
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  
  
}

