import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class AppDetailsComponent {

  constructor(private router: ActivatedRoute) {
    console.log(this.router.snapshot.params['id']);
  }
}
