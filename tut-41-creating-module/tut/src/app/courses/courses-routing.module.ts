import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonCourseComponent } from './python-course/python-course.component';
import { JavaCourseComponent } from './java-course/java-course.component';

const routes: Routes = [
  {path:'python-course',component:PythonCourseComponent},
  {path:'java-course',component:JavaCourseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
