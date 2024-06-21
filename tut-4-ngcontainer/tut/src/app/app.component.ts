import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  myArray:number[] = [10,20,30,40,50,10];
  val:Boolean=true;
  

}
