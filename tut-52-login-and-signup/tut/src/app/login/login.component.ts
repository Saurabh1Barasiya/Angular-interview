import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServicesService } from 'src/Services/my-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform!:FormGroup;
  loginError :boolean = false;

  constructor(private sr:MyServicesService,private route:Router){
    this.loginform = new FormGroup({
      username : new FormControl('',Validators.required),
      password : new FormControl('',Validators.required),
    });
  }

  submit(){
    const username = this.loginform.value?.username;
    const password = this.loginform.value?.password;

    console.log(username,password);

    this.sr.loginRequest(username,password).subscribe({
      next:(resposnse:any)=>{
        if(resposnse.length >  0){
          alert("login Suessfully!!!");
          localStorage.setItem('user',JSON.stringify(resposnse[0]));
          this.route.navigate(["/dashboard"]);
          this.loginError = false;
        }else{
          this.loginError = true;
          alert("wrong username and password!!!");
        }
      },
      error:(err)=>{
        console.log("Error has accured",err);
        this.loginError = true;
      }
    });

    this.loginform.reset();
  }

}
