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
    { id: 4, name: 'Alex White', age: 15, grade: '10th', marks: 65 },
    { id: 5, name: 'Lisa Black', age: 16, grade: '11th', marks: 50 },
    { id: 6, name: 'reo Black', age: 16, grade: '11th', marks: 45 },
  ];

  getMarks(marks: number) {
    if (marks >= 75) {
      return { 'background-color': 'purple', 'font-weight': 'bold' };
    } else if (marks >= 60) {
      return { 'background-color': 'blue', 'font-weight': 'bold' };
    } else {
      return { 'background-color': 'red', 'font-weight': 'bold' };
    }
  }
}