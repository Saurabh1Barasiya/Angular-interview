import { Component } from '@angular/core';
import { of, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';
  numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  myArray:number[] = [] ;

  constructor(){
    this.numbers$.pipe(takeWhile(number => number <=5)).subscribe(
      (data)=>{
      console.log("first");
      this.myArray.push(data);
      console.log(data);
     },
     (error)=>{
      console.log("kuch error aa gayi hai.");

     },
     ()=>{
      console.log("end");
      console.log("compleate ho gaya h ");
     }
  )
  }
}
