import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NikeComponent } from './nike/nike.component';
import { PumaComponent } from './puma/puma.component';

const routes: Routes = [
  {path:'nike',component:NikeComponent},
  {path:'puma',component:PumaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoseRoutingModule { }
