import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
 
  title = 'tut';

  @ViewChild('change') button!:ElementRef;

  ngOnInit(): void {
    console.log(this.button);
  }

  ngAfterViewInit(): void {
    console.log(this.button.nativeElement);
    this.button.nativeElement.innerText = "Changed."
  }

}
