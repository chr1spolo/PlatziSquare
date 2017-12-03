import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  places: any = [
    {plan: 'paid', nearBy: 1, distance: 1, active: true, nombre: 'Floristeria la gacela'},
    {plan: 'free', nearBy: 1, distance: 3, active: true, nombre: 'Veterinaria huellitas felices'},
    {plan: 'free', nearBy: 2, distance: 7, active: false, nombre: 'Drogas la rebaja'},
    {plan: 'paid', nearBy: 6, distance: 30, active: true, nombre: 'Tienda el rebajón'}
  ];
  lat = 4.6560663;
  lng = -74.0595918;

  constructor () {
    setTimeout( () => {

    }, 3000);
  }

}
