import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {
  private url = "http://localhost:4000";

  constructor(private http:HttpClient) { }

  loginRequest(username:string,password:string):Observable<any>{
    const apiUrl = `${this.url}/users?username=${username}andpassword=${password}`
    console.log(apiUrl);
    return this.http.get(`${this.url}/users?username=${username}&password=${password}`);
  }

  signupRequest(user:any):Observable<any>{
    return this.http.post(`${this.url}/users`,user);
  }

}
