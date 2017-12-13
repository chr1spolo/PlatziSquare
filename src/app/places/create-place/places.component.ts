import { Component } from '@angular/core';
import { AppPlacesService } from './places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  providers: [AppPlacesService]
})
export class AppPlacesComponent {
  places: any = [];

  lat = 4.6560663;
  lng = -74.0595918;

  constructor (
    public placeService: AppPlacesService
  ) {
    this.places = this.placeService.getPlaces();
  }
}
