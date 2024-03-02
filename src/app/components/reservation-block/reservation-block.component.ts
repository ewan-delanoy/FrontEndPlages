import {Component, Input} from '@angular/core';
import {TripleReservationOutput} from "../../model/output/triple-reservation-output";
import {ReservationOutput} from "../../model/output/reservation-output";
import {ReservationListFrontEnd} from "../../model/front-end/reservation-list-front-end";
import {AuthService} from "../../shared/auth.service";
import {StorageService} from "../../shared/storage.service";
import {dummyTripleReservation} from "../../model/constants";

@Component({
  selector: 'app-reservation-block',
  templateUrl: './reservation-block.component.html',
  styleUrls: ['./reservation-block.component.css']
})
export class ReservationBlockComponent {
  @Input()
  reservations!: ReservationListFrontEnd

  constructor(public storageService: StorageService) {

  }
  seeReservationDetail(allowTreatment:boolean,reservation:ReservationOutput) {
    this.storageService.treatmentAllowedOnReservation = allowTreatment
    this.storageService.currentReservation = reservation
  }
}
