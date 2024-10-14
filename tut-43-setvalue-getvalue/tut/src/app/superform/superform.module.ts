import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperformRoutingModule } from './superform-routing.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    SuperformRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SuperformModule { }
