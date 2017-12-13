import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppPlacesService } from '../places/places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [AppPlacesService]
})
export class AppDetailsComponent {

  id: number;
  place: any = {};

  constructor(
    private act_router: ActivatedRoute,
    private router: Router,
    public placeService: AppPlacesService
  ) {
    this.id = this.act_router.snapshot.params['id'];
    this.place = this.placeService.getPlace(this.id);
    if (this.place == null) {
      this.router.navigateByUrl('/');
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
