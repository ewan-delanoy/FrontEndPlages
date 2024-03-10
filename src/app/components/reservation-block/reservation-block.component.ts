import {Component, Input} from '@angular/core';
import {ReservationOutput} from "../../model/output/reservation-output";
import {ReservationListFrontEnd} from "../../model/front-end/reservation-list-front-end";
import {StorageService} from "../../shared/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-block',
  templateUrl: './reservation-block.component.html',
  styleUrls: ['./reservation-block.component.css']
})
export class ReservationBlockComponent {
  @Input()
  reservations!: ReservationListFrontEnd

  constructor(public storageService: StorageService,
              public router: Router) {

  }
  seeReservationDetail(allowTreatment:boolean,reservation:ReservationOutput) {
    console.log("Entering seeReservationDetail")
    this.storageService.treatmentAllowedOnReservation = allowTreatment
    this.storageService.setViewedReservation(reservation)
    this.router.navigate(['reservation-detail/'])
  }
}
