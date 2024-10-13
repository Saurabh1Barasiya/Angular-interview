import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { PythonCourseComponent } from './python-course/python-course.component';
import { JavaCourseComponent } from './java-course/java-course.component';


@NgModule({
  declarations: [
    PythonCourseComponent,
    JavaCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
