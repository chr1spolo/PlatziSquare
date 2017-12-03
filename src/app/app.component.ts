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

  constructor () {
    setTimeout( () => {

    }, 3000);
  }

}
