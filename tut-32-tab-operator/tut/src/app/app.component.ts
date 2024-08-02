import { Component, OnInit } from '@angular/core';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'tut';

  ngOnInit(): void {
    of(1,2,3)
    .pipe(
      tap(value => console.log('Before processing:', value)),
      // other operators can be added here
      tap(value => console.log('After processing:', value))
    )
    .subscribe(value => {
      console.log('Received:', value);
    });
  }


}
