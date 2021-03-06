import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AppPlacesService {
    constructor(private afDB: AngularFireDatabase) { }

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

    public getPlaces() {
        return this.afDB.list('places/');
    }

    public getPlace(id) {
        return this.places.find( (place) => { return place.id == id }) || null;
    }

    public savePlace(object) {
      this.afDB.database.ref(`places/${object._id}`).set(object);
    }
}