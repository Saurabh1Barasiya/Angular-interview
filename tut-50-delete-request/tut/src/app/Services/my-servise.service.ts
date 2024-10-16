import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Models/Course.interface';

@Injectable({
  providedIn: 'root'
})
export class MyServiseService {

  private url = "http://localhost:4000/courses"
  constructor(private http:HttpClient) { }

  getData():Observable<Course[]>{
    return this.http.get<Course[]>(this.url);
  }

  delete(id:any){
    const url = `${this.url}/${id}`;
    console.log(url);
    return this.http.delete<void>(url);
  }
}
