import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  data$: Observable<string>;
  
  constructor(){
    this.data$ = of("i am saurabh");
    // console.log(this.data$);
  }

  promiss = new Promise((resolve)=>{
    setTimeout(() => {
      resolve("I am saurabh from Promiss")
    }, 2000);
  })

}
