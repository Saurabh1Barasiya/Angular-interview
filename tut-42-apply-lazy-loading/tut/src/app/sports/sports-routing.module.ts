import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CricketComponent } from './cricket/cricket.component';
import { HockeyComponent } from './hockey/hockey.component';

const routes: Routes = [
  {path:'cricket',component:CricketComponent},
  {path:'hockey',component:HockeyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
