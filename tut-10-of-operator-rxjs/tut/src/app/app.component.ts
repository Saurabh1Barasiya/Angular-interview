import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'tut';

  data = of(40)

  numbers$ = of(1, 2, 3, 4, 5);

  fruits$ = of(["banana","mango","orange","papaya"]);
  

  ngOnInit() {
    this.data.subscribe((value)=>{
      console.log(value);
    });

    this.numbers$.subscribe((value:number) => {console.log(value)}); 
  }
}
