import { Component } from '@angular/core';
import { MyserviseService } from 'src/Services/myservise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  constructor(private sr:MyserviseService){}

  newPost = {
    userId: 500,
    title: '',
    body: ''
  }

  submitPost(){
    this.sr.createPost(this.newPost).subscribe({
      next:(response)=>{
        console.log("Data send successfully!!!",response);
      },
      error:(err)=>{
        console.log("Error aa gayi h data send karne par...",err);
      }
    });
  }
}
