import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChange]'
})
export class ChangeDirective {


  @HostBinding('style.color') color='';
  @HostBinding('style.backgroundColor') background='';
  @HostBinding('style.border') border = ""
  @HostBinding('style.width') width = ""
  constructor() {}


   @HostListener("mouseenter") onmouseIN(){
      this.color = "white";
      this.background = "black";
      this.border = "5px solid red";
      this.width = "50%"; 
    }

   @HostListener("mouseleave") onmouseOut(){
    this.color = "";
    this.background = "";
    this.border = "";
    this.width = "";
    }

    changeStyle(){
      this.color = "white";
      this.background = "black";
      this.border = "5px solid red";
      this.width = "50%"; 
    }
}
