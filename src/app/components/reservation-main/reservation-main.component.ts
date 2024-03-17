import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-main',
  templateUrl: './reservation-main.component.html',
  styleUrls: ['./reservation-main.component.css']
})
export class ReservationMainComponent {

  readyForReview:boolean = false

  constructor() {
  }

  onActivate(elementRef:any) {
    elementRef.transmittedParasolChange.subscribe((newReadyForReview:boolean) => {
      this.readyForReview = newReadyForReview
    });
  }




}
