import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonComponent } from './python/python.component';
import { JavaComponent } from './java/java.component';

const routes: Routes = [
  {path:'python',component:PythonComponent},
  {path:'java',component:JavaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
