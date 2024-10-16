import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Courses } from 'src/Models/Courses.interface';
import { MyservicesService } from 'src/Services/myservices.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tut';
  course!: FormGroup;
  courseData: Courses[] = [];

  constructor(private sr: MyservicesService) {
    this.course = new FormGroup({
      name: new FormControl(''),
      duration: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.sr.getPost().subscribe({
      next: (response: Courses[]) => {
        console.log(response);
        this.courseData = response;
      },

      error: (err) => {
        console.log("getting error", err);
      },
    });
  }

  submit() {
    console.log(this.course.value);
    this.sr.createPost(this.course.value).subscribe({
      next: (response) => {
        console.log("data send sucessfully", response)
      },
      error: (err) => {
        console.log("Error aa gayi h", err);
      }
    })
    this.course.reset();
  }

  updateData() {
    let id = 'f06d';
    let data = {
      id: 3,
      name: "C++",
      duration: "6 weeks"
    }

    this.sr.putPost(id, data).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log("error aa gayi h", err);
      }
    });
  }


  patcheData() {
    let id = 'f06d';
    let data = {
      duration: "10 weeks"
    }

    this.sr.patchPost(id, data).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log("error aa gayi h", err);
      }
    });
  }
}
