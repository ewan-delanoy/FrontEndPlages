import {Component, Input} from '@angular/core';
import {TripleReservationOutput} from "../../model/output/triple-reservation-output";
import {ReservationOutput} from "../../model/output/reservation-output";
import {ReservationListFrontEnd} from "../../model/front-end/reservation-list-front-end";
import {AuthService} from "../../shared/auth.service";
import {StorageService} from "../../shared/storage.service";
import {dummyTripleReservation} from "../../model/constants";
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
