import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tut';

  constructor(){
    console.log("I am Parent constructor...");
  }

  ngOnInit(){
    console.log("I am app ngOnInit....");
  }

  

}
