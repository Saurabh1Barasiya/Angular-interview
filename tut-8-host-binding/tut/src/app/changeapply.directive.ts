import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeapply]'
})
export class ChangeapplyDirective {

  constructor() { }

  @HostBinding('style.color') color='';
  @HostBinding('style.backgroundColor') background='';

  @HostListener('mouseenter') onMouseChange(){
    this.color = 'red' ;
    this.background = 'black'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.color = 'blue';
     this.background = ''
  }

}
