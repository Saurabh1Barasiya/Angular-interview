import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements DoCheck,AfterContentInit{

  @ContentChild('heading') head!:ElementRef;
  ngDoCheck(): void {
    console.log("Ng Do check called....");

    // ham yaha isko access nahi kar sakte hai.
    console.log(this.head.nativeElement);
  }

  ngAfterContentInit(): void {

    // is hook ke just raise hone se pahle contentChild and contentChildern initilize hoti hai.
    console.log("NgAferContent Init called....");
    console.log(this.head.nativeElement);
  }
}
