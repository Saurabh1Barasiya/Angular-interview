import { Component, ViewChild } from '@angular/core';
import { ChangeDirective } from './change.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';


  constructor(){}

  @ViewChild(ChangeDirective, { static: true }) ChangeDirective: ChangeDirective | undefined;

  Doit(){
    this.ChangeDirective?.changeStyle();
  }
}


