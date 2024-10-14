import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tut';

  loginForm!:FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      uname:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    });

    this.loginForm.valueChanges.subscribe((value)=>{
      console.log(value);
    });

    this.loginForm.statusChanges.subscribe((status)=>{
      console.log(status);
    })

  }

  getData(){
    console.log("data submitted");
  }

  
}
