import { AfterViewInit, Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'tut';
  buttonEvent !: Observable<Event>;


  startTimer() {
    interval(1000).pipe(takeUntil(this.buttonEvent)).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },

      () => {
        console.log("complete");
      }
    );
  }

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(document.getElementById("endTimer")!, "click");
  }
}
