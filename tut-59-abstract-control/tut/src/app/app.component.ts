import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tut';

  form!:FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        password: new FormControl('',[Validators.required,Validators.minLength(6)]),
        confirmPassword: new FormControl('',[Validators.required])
      },
      {validators:this.paswordMatchValidator}
    );
  }

  paswordMatchValidator(control:AbstractControl): { [key:string]:boolean} | null {
    let password = control.get('password')?.value;
    let confirmPassword = control.get('confirmPassword')?.value;

    // console.log("i am running...",password,confirmPassword);

    console.log();

    return password === confirmPassword ? null : {passwordMismatch: true};
  }

  gettingData(){
    console.log(this.form.value);
    this.form.reset();
  }
}
