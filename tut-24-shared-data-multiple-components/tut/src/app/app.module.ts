import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';
import { Cmp4Component } from './cmp4/cmp4.component';
import { Cmp5Component } from './cmp5/cmp5.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component,
    Cmp3Component,
    Cmp4Component,
    Cmp5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
