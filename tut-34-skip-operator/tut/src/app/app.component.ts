import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of, skip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{

  title = 'tut';

  source$ = of(1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10);
  ngOnInit(): void {
    setInterval(()=>{

    },1000);
    this.source$.pipe(
      skip(5)
    ).subscribe(data=>{
      console.log(data);
    });
  }

  ngAfterViewInit(): void {

  }

  
  
}
