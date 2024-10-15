import { Component } from '@angular/core';
import { MyserviseService } from './myservise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  constructor(private sr: MyserviseService) { }

  posts: any[] = [];

  getData() {
    this.sr.getPost().subscribe({
      next:(data)=>{
        console.log(data);
        this.posts = data;
      },
      error:(err)=>{
        console.log("error occurd while getting data",err);
      }
    });
  }

  
}
