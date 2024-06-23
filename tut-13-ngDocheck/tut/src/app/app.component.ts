import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'tut';

  constructor(){
    console.log("I am constructor....");
  }

  ngDoCheck() {
    console.log("I am form Docheck....");
  }

  pressMe(){
    
  }
  
}
