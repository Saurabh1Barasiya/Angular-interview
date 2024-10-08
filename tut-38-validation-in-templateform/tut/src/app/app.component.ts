import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  onSummit(data:any){
    console.log(`${data.fname}`);
    console.log(`${data.lname}`);
    console.log(`${data.mobile}`);
  }
}
