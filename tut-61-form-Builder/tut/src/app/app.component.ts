import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tut';
  constructor(private fb : FormBuilder){}

  myForm!:FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:[''],
      email:[''],
      password:[''],

      skills:this.fb.array([
        this.fb.control(''),
        this.fb.control(''),
      ]),
    });
  }

  get skills(){
    return this.myForm.get('skills') as FormArray;
  }

  getData(){
    console.log(this.myForm.value);
  }

}