import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServicesService } from 'src/Services/my-services.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupform!:FormGroup;
  signupError :boolean = false;

  constructor(private sr:MyServicesService,private route:Router){
    this.signupform = new FormGroup({
      username : new FormControl('',Validators.required),
      email : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    });
  }

  submit(){
    const user = this.signupform.value;
    console.log("Entered value",user);

    this.sr.signupRequest(user).subscribe({
      next:(resposnse:any)=>{
        console.log(resposnse);
        alert("Account created sucessfully!!!");
        this.route.navigate(["/login"]);
        this.signupError = false;
      },
      error:(err)=>{
        console.log("Error has accured",err);
        this.signupError = true;
      }
    });

    this.signupform.reset();
  }
}
