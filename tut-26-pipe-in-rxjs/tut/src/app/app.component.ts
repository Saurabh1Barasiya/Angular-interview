import { Component } from '@angular/core';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  data$ = of(1,2,3,4,5,6);

  constructor(){
    this.data$.pipe(filter(value=>value > 3)).subscribe(val=>console.log(val));
  }



}
