import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tut';

  myForm!:FormGroup;
  constructor(private fb:FormBuilder){
    this.myForm = this.fb.group({
      name:[''],
      email:[''],
      skills:this.fb.array([this.fb.control('')]),
    });
  }

  get Skills(){
    return this.myForm.get('skills') as FormArray;
  }

  getData(){
    console.log(this.myForm.value);
  }

  addSkill(){
    this.Skills.push(this.fb.control(""))
  }

  removeSkill(i:number){
    this.Skills.removeAt(i);
  }


}
