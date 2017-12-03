import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltDirective } from './directives/resalt.directive';
import { AppCountClicksDirective } from './directives/count-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResaltDirective,
    AppCountClicksDirective
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
