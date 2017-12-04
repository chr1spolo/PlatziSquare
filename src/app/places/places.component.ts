import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class AppPlacesComponent {
  places: any = [
    {id: 1, plan: 'paid', nearBy: 1, distance: 1, active: true, nombre: 'Floristeria la gacela'},
    {id: 2, plan: 'free', nearBy: 1, distance: 3, active: true, nombre: 'Veterinaria huellitas felices'},
    {id: 3, plan: 'free', nearBy: 2, distance: 7, active: false, nombre: 'Drogas la rebaja'},
    {id: 4, plan: 'paid', nearBy: 6, distance: 30, active: true, nombre: 'Tienda el rebajón'}
  ];

  constructor () {
    setTimeout( () => {

    }, 3000);
  }
}
