import { Routes, RouterModule } from '@angular/router';

import { AppDetailsComponent } from './details/details.component';
import { AppPlacesComponent } from './places/places.component';

const APP_ROUTES: Routes = [
  { path: '', component: AppPlacesComponent, pathMatch: 'full' },
  { path: 'index', component: AppPlacesComponent },
  { path: 'details', component: AppDetailsComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
