import { Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'tut';

  source$ = of(1,2,3,4,5,6);

  ngOnInit(): void {
    this.source$.pipe(
      tap(value =>{console.log("original value",value)}),
      map(value=>value*10),
      tap(transmittedVal=>{console.log("transmitted value",transmittedVal)})
    ).subscribe(data=>{
      console.log("recived data",data);
    })
  }
  
}
