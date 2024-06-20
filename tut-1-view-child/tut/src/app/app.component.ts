import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';
  @ViewChild('myVal') someValue!:ElementRef; 
  data:string='';

  getData(){
    console.log(this.someValue.nativeElement.value);
    this.data = this.someValue.nativeElement.value;
  }
}
