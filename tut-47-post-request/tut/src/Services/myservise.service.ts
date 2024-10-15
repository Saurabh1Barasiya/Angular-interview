import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyserviseService {
  
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  createPost(data:any){
    return this.http.post<any>(this.apiUrl,data);
  }


}
