import { Component, OnInit } from '@angular/core';
import { MyServicesService } from './Services/my-services.service';
import { Course } from './Models/Course.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tut';
  courses:Course[] = [];
  showModal: boolean = false; // Control modal visibility
  selectedCourse: Course | null = null; // To store selected course for editing

  courseForm!:FormGroup;
  constructor(private sr:MyServicesService){
    this.courseForm = new FormGroup({
      name:new FormControl('',Validators.required),
      duration:new FormControl('',Validators.required),
    });
  }
 
  getData(){
    this.sr.getPost().subscribe({
      next:(data:Course[])=>{
        console.log(data);
        this.courses = data;
      },
      error:(err)=>{
        console.log("error aa gayi h",err);
      }
    })
  }

  openEditModal(course:Course){
    this.selectedCourse = course;
    this.showModal = true;
    // console.log(course);

    // Populate form with selected course values
    this.courseForm.setValue({
      name: course.name,
      duration: course.duration
    });
  }

  closeModal() {
    this.showModal = false;
    this.courseForm.reset(); // Optionally reset the form
  }

  updateCourse(){
    if(this.selectedCourse){
      // hamne jab id field ko define kiya h to Model class par 
      // to vaha usko optional mark kiya h , isiliye yaha par ! ka use karna pad rah h
      const id = this.selectedCourse.id!;
      const updatedCourse = this.courseForm.value;
      this.sr.updateCourse(id,updatedCourse).subscribe({
        next:(res)=>{
          console.log("response",res);
          const index = this.courses.findIndex(c => c.id === res?.id);
          this.courses[index] = res;
          this.closeModal();
        },
        error:(err)=>{
          console.log("Error aa gayi h",err);
        }
      })
    }
  }



  deleteCourse(id:any){
    this.sr.deletePost(id).subscribe({
      next:()=>{
        this.courses = this.courses.filter(c => c.id !== id);
      },
      error:(err)=>{
        console.log("Error aa gayi h",err);
      }
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  addCourse(){
    const newData = this.courseForm.value;
    const maxID = this.courses.length > 0 ? Math.max(...this.courses.map((c)=>c.id!)) : 0;
    newData.id = maxID + 1;

    this.sr.createPost(newData).subscribe({
      next:(response)=>{

        this.courses.push(response);
      },
      error:(err)=>{
        console.log("Error aa gayi h",err);
      }
    })
    this.courseForm.reset();
  }



}
