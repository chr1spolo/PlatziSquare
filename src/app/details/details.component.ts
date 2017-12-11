import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class AppDetailsComponent {

  places: any = [
    {
      id: 1,
      plan: 'paid',
      nearBy: 1,
      distance: 1,
      active: true,
      nombre: 'Floristeria la gacela',
      description: 'Descripcion de este negocio. Más adelante tendremos más informacion'
    },
    {
      id: 2,
      plan: 'free',
      nearBy: 1,
      distance: 3,
      active: true,
      nombre: 'Veterinaria huellitas felices',
      description: 'Descripcion de este negocio. Más adelante tendremos más informacion'
    },
    {
      id: 3,
      plan: 'free',
      nearBy: 2,
      distance: 7,
      active: false,
      nombre: 'Drogas la rebaja',
      description: 'Descripcion de este negocio. Más adelante tendremos más informacion'},
    {
      id: 4,
      plan: 'paid',
      nearBy: 6,
      distance: 30,
      active: true,
      nombre: 'Tienda el rebajón',
      description: 'Descripcion de este negocio. Más adelante tendremos más informacion'}
  ];
  id: number;
  place: any = {};

  constructor(private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['id'];
    this.place = this.findPlace();
  }

  findPlace() {
    return this.places.find( (place) => {
      return this.id == place.id;
    }) || null;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
