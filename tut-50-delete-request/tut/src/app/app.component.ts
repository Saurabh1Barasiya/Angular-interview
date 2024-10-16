import { Component, OnInit } from '@angular/core';
import { MyServiseService } from './Services/my-servise.service';
import { Course } from './Models/Course.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'tut';
  courseData:Course[]=[];

  constructor(private sr:MyServiseService){}

  deleteCourse(){
    const id = 2;
    this.sr.delete(id).subscribe({
      next:(response)=>{
        console.log("Data deleted sucessfully",response);
      },
      error:(err)=>{
        console.log("error aa gayi h yr",err);
      }
    })
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(){
    this.sr.getData().subscribe({
      next:(response:Course[])=>{
        console.log("data fetched successfully",response);
        this.courseData = response;
      },
      error:(err)=>{
        console.log("error aa gayi h",err);
      },
    });
  }
}
