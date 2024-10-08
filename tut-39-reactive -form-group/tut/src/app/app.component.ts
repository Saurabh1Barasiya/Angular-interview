import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'tut';
  profileForm!:FormGroup;

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstname : new FormControl(null,[Validators.required]),
      lastname : new FormControl(null,[Validators.required]),
      email : new FormControl(null,[Validators.required,Validators.email]),
      gender : new FormControl('male',[Validators.required]),

      address : new FormGroup({
        city : new FormControl('',[Validators.required]),
        state: new FormControl('',[Validators.required]),
      }),
    });
  }

  getData(){
    console.log("FirstName",this.profileForm.value?.firstname);
    console.log("Lastname",this.profileForm.value?.lastname);
    console.log("Email",this.profileForm.value?.email);
    console.log("Gender",this.profileForm.value?.gender);
    console.log("City",this.profileForm.value?.address?.city);
    console.log("State",this.profileForm.value?.address?.state);
  }
}
