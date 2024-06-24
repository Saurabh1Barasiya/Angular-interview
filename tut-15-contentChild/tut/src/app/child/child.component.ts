import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit{
  
  @ContentChild('hthree') paraEl!:ElementRef;

  ngAfterContentInit(): void {
    console.log(this.paraEl.nativeElement.innerText);
  }


  gettingData(){
    console.log(this.paraEl.nativeElement.innerText);
    // this.paraEl.nativeElement.innerText="hi";
  }

  
}
