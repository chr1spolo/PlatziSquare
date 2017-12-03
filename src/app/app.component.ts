import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  places: any = [
    {active: true, nombre: 'Floristeria la gacela'},
    {active: true, nombre: 'Veterinaria huellitas felices'},
    {active: false, nombre: 'Drogas la rebaja'},
    {active: true, nombre: 'Tienda el rebajón'}
  ];
  lat = 4.6560663;
  lng = -74.0595918;

  constructor () {
    setTimeout( () => {

    }, 3000);
  }

}
