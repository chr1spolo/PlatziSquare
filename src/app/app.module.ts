import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF5xDGPJPm5VHTvnt3YiKDOWQQXXF1Cu8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
