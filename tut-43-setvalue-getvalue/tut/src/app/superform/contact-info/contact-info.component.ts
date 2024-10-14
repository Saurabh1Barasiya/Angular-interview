import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  contactForm !: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
        firstname:[''],
        lastname:[''],
        email:[''],
        password:[''],
    });
  }


  getData(){
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  updateData(){
    this.contactForm.setValue({
      firstname:"Saurabh",
        lastname:"Barasiya",
        email:'saurabh.barasiya@gmail.com',
        password:123456789,
    });
  }

  updateOneField(){
    this.contactForm.patchValue({
      email:'hello@gmail.com',
    })
  }

}