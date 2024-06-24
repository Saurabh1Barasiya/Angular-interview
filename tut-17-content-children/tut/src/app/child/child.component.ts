import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @ContentChildren('para') paras!:QueryList<ElementRef>;

   getting(){
      this.paras.forEach(ele=>console.log(ele.nativeElement.innerText));
   }
}
