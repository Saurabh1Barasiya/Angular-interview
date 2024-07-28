import { Component, OnInit } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'tut';

  ngOnInit(): void {
    const Data$ = interval(1000); 

    // Data$.subscribe(data => console.log(data));

    Data$.pipe(
      (filter(data=> data % 2 === 0)),
      map(num => `even number ${num}`)
    )
    .subscribe(num=>{console.log(num)});
  }

}
