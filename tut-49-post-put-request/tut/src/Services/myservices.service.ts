import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from 'src/Models/Courses.interface';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  apiUrl = "http://localhost:4000/courses";
  constructor(private http:HttpClient) { }

  getPost():Observable<Courses[]>{
    return this.http.get<Courses[]>(this.apiUrl);
  }

  createPost(newData:Courses):Observable<Courses>{
    return this.http.post<Courses>(this.apiUrl,newData);
  }

  putPost(id:any,data:Courses):Observable<Courses>{
    let newApiUrl = `${this.apiUrl}/${id}`;
    return this.http.put<Courses>(newApiUrl,data);
  }

}
