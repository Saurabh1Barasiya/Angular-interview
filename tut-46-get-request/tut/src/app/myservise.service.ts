import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Models/Post.interface.';


@Injectable({
  providedIn: 'root'
})
export class MyserviseService {
  private apiUrl = "https://jsonplaceholder.typicode.com/posts";  // Example API endpoint.
  constructor(private http:HttpClient) { }

  getPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }




}
