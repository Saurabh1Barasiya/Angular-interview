import { Component } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';
  numbers$ = range(1,15);
  myArray:number[] = [];

  constructor(){
    this.numbers$.subscribe(data=>{
      this.myArray.push(data);
    }),
    console.log(this.myArray);
  }
}
