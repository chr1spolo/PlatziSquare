import { Component } from '@angular/core';
import { AppPlacesService } from "../places.service";

@Component({
    selector: 'app-create-place',
    templateUrl: './create-places.component.html',
    styleUrls: ['./create-places.component.css'],
    providers: [AppPlacesService]
})
export class AppPlacesCreateComponent {
    place:any = {};
    constructor(private placesService: AppPlacesService){}

    savePlace(){
        this.place._id = Date.now();
        this.placesService.savePlace(this.place);
        alert('Lugar creado exitosamente');
        this.place = {};
    }
}