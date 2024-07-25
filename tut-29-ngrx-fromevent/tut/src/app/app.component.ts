import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'tut';
  @ViewChild('myBtn') button!: ElementRef;
  @ViewChild('box') box!:ElementRef;


  ngAfterViewInit(): void {
    const buttonClick$ = fromEvent(this.button.nativeElement, 'click');

    buttonClick$.subscribe(() => {
      console.log('Button clicked!')
    });

    const mouseMove$ = fromEvent(this.box.nativeElement,'mousemove');
    mouseMove$.subscribe(()=>{
      console.log("mouse move ho raha h...");
    })

  }

}
