import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetdataComponent } from './getdata/getdata.component';
import { PostdataComponent } from './postdata/postdata.component';
import { PutdataComponent } from './putdata/putdata.component';
import { DeletedataComponent } from './deletedata/deletedata.component';


@NgModule({
  declarations: [
    AppComponent,
    GetdataComponent,
    PostdataComponent,
    PutdataComponent,
    DeletedataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
