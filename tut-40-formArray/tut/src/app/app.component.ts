import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,FormArray } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tut';

  profileForm!:FormGroup;

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstname : new FormControl(''),
      lastname : new FormControl(''),
      skills : new FormArray([
        new FormControl(''),
        new FormControl(''),
        new FormControl(''),
      ]),
    });
  }


  get skills(){
    return this.profileForm.get("skills") as FormArray;
  }

  getData(){
    console.log(this.profileForm.value);
  }

}