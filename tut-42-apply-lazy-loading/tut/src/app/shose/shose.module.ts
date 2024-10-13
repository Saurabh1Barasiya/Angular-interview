import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoseRoutingModule } from './shose-routing.module';
import { NikeComponent } from './nike/nike.component';
import { PumaComponent } from './puma/puma.component';


@NgModule({
  declarations: [
    NikeComponent,
    PumaComponent
  ],
  imports: [
    CommonModule,
    ShoseRoutingModule
  ]
})
export class ShoseModule { }
