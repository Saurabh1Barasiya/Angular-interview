import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  students = [
    { id: 1, name: 'John Doe', age: 15, grade: '10th', marks: 85 },
    { id: 2, name: 'Jane Smith', age: 14, grade: '9th', marks: 92 },
    { id: 3, name: 'Sam Brown', age: 16, grade: '11th', marks: 78 },
    { id: 4, name: 'jui jo', age: 16, grade: '11th', marks: 50 },
    { id: 5, name: 'sam so', age: 16, grade: '11th', marks: 40 }
  ];

  getMarksClass(marks:number):string{
    if (marks>=90){
      return "heigh-marks";
    }else if(marks>= 75){
      return "nice-marks";
    }else if(marks >= 60){
      return "good-marks";
    }else{
      return "ok";
    }
  }
}
