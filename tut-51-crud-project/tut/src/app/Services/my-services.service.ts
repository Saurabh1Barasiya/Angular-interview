import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Models/Course.interface';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:4000/courses";

  getPost():Observable<Course[]>{
    return this.http.get<Course[]>(this.url);
  }

  createPost(data:Course):Observable<Course>{
    return this.http.post<Course>(this.url,data);
  }

  updateCourse(courseId: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.url}/${courseId}`, course);
  }

  deletePost(id:number):Observable<void>{
    const newUrl = `${this.url}/${id}`;
    return this.http.delete<void>(newUrl);
  }


}
