import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickLogger]'
})
export class ClickLoggerDirective {

  constructor() { }
  @HostListener("click") onClick(){
    console.log("you clicked here.");
  }
  @HostListener("mouseenter") onMouseEnter(){
    console.log("Mouse box ke ander aaya");
  }
  @HostListener("mouseleave") onMouseLeave(){
    console.log("Mouse box ke bahar gaya");
  }



}
