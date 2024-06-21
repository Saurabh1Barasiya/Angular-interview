import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  @ViewChildren('inputEl') inputElement!:QueryList<ElementRef>;
  fullname:string='';
  getData(){
    // console.log(this.inputElement);
    this.inputElement.forEach((ele)=>{
      this.fullname +=  ele.nativeElement.value+ ' ';
    })
    this.fullname.trim();
    console.log(this.fullname);
  }
}
