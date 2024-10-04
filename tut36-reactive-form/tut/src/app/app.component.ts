import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';
  constructor(){  }

  profileForm = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    mobile:new FormControl(''),
  });

  getData(){
    console.log(`  ${this.profileForm.value.firstname}`);
    console.log(`  ${this.profileForm.value.lastname}`);
    console.log(`  ${this.profileForm.value.mobile}`);
  }
}
