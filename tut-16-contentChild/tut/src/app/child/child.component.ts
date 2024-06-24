import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  
  @ContentChild('inp', { static: false }) inpData!: ElementRef;
  @ContentChild(TestComponent) test!:TestComponent;

  // { static: false } option ka matlab hai ki Angular is reference ko runtime (jab component initialize ho raha ho) ke dauran dhundega, na ki compile time pe. Yeh generally tab useful hota hai jab element dynamically change ho sakta hai.

  getting(){
    console.log((this.inpData.nativeElement as HTMLInputElement).value);
    console.log(this.test.name);
    alert(this.test.name);
  }
}
