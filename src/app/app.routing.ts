import { Routes, RouterModule } from '@angular/router';

import { AppDetailsComponent } from './details/details.component';
import { AppPlacesComponent } from './places/places.component';
import { AppContactComponent } from './contact/contact.component';
import { AppPlacesCreateComponent } from './places/create-place/create-places.component';

const APP_ROUTES: Routes = [
  { path: '', component: AppPlacesComponent, pathMatch: 'full' },
  { path: 'index', component: AppPlacesComponent },
  { path: 'contact', component: AppContactComponent },
  { path: 'create', component: AppPlacesCreateComponent },
  { path: 'details/:id', component: AppDetailsComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
