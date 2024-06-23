import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // constructor(){
  //   console.log("I am Child constructor...");
  // }

  constructor(){
    console.log("I am Child constructor...");
  }

  ngOnInit(){
    console.log("I am child ngOnInit....");
  }
}
