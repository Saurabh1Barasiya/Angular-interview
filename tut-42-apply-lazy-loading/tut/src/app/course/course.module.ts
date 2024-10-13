import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';


@NgModule({
  declarations: [
    PythonComponent,
    JavaComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
