import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { CricketComponent } from './cricket/cricket.component';
import { HockeyComponent } from './hockey/hockey.component';


@NgModule({
  declarations: [
    CricketComponent,
    HockeyComponent
  ],
  imports: [
    CommonModule,
    SportsRoutingModule
  ]
})
export class SportsModule { }
