import { Component } from '@angular/core';
import { Post } from 'src/Models/Post.interface';
import { MysevisesService } from 'src/Servies/mysevises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  constructor(private sr:MysevisesService){}

  data:Post = {
    userId: 0,
    title: '',
    body: '',
  }


  onSubmit(){
    // console.log(this.data);
    this.sr.createPost(this.data).subscribe({
      next:(response)=>{
        console.log("Data send sucessfully...",response);
      },
      error:(err)=>{
        console.log("error occured while sending data",err);
      }
    })

    this.data = {
      userId: 0,
      title: '',
      body: '',
    }
  }
}
