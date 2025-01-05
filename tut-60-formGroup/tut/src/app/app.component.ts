import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tut';
  myForm!:FormGroup;

  constructor(){

  }


  ngOnInit(): void {
    this.myForm = new FormGroup({
      fname : new FormControl(''),
      lname : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
    })
  }

  getData(){
    console.log(this.myForm.value);
  }


  
}
