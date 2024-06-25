import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterContentInit,AfterContentChecked{


  @ContentChild('para') para!:ElementRef;
  
  ngAfterContentInit(): void {
    console.log("ng after content init called...")
  }

  ngAfterContentChecked(): void {
    console.log("ng after content checked called...");
  }

  
}
