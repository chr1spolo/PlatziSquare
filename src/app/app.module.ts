import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltDirective } from './directives/resalt.directive';
import { AppCountClicksDirective } from './directives/count-clicks.directive';

import { AppDetailsComponent } from './details/details.component';
import { AppPlacesComponent } from './places/places.component';
import { AppPlacesCreateComponent } from './places/create-place/create-places.component';
import { AppContactComponent } from './contact/contact.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyC411xhHdhxdnbnig4yErTMUXYUURxiGns",
  authDomain: "platzisquare-1512328271566.firebaseapp.com",
  databaseURL: "https://platzisquare-1512328271566.firebaseio.com",
  storageBucket: "platzisquare-1512328271566.appspot.com",
  messagingSenderId: "909781924049"
};


import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ResaltDirective,
    AppCountClicksDirective,
    AppDetailsComponent,
    AppPlacesComponent,
    AppContactComponent,
    AppPlacesCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAF5xDGPJPm5VHTvnt3YiKDOWQQXXF1Cu8'
    }),
    Routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
