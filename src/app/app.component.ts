import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  places: any = [
    {nombre: 'Floristeria la gacela'},
    {nombre: 'Veterinaria huellitas felices'},
    {nombre: 'Drogas la rebaja'},
    {nombre: 'Tienda el rebajón'},
  ];

  constructor () {
    setTimeout( () => {

    }, 3000);
  }

}
