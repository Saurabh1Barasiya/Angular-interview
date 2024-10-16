import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/Models/Post.interface';

@Injectable({
  providedIn: 'root'
})
export class MysevisesService {

  apiUrl = "http://localhost:3000/posts";
  constructor(private http:HttpClient) { }

  createPost(newData:Post):Observable<Post>{
    return this.http.post<Post>(this.apiUrl,newData);
  }
}
