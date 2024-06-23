import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges{
  @Input() inp!:number;

  constructor(){
    console.log("I am constructor....");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng onchnages runs....");
  }



}
