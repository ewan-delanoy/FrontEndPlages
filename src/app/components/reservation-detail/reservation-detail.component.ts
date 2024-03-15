import { Component } from '@angular/core';
import {ReservationOutput} from "../../model/output/reservation-output";
import {dummyReservationOutput} from "../../shared/constants";
import {ApiCallerService} from "../../service/api-caller.service";
import {StorageService} from "../../shared/storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent {

  reservation: ReservationOutput = dummyReservationOutput
  treatmentAllowedOnReservation: boolean = false
  totalPrice: number = 0
  clientConnecte: boolean = false


  constructor(
    public storageService: StorageService,
    public apiCaller:ApiCallerService,
    public router:Router
  ) {
    this.reservation = this.storageService.getViewedReservation()
    this.treatmentAllowedOnReservation = this.storageService.treatmentAllowedOnReservation
    this.totalPrice = this.storageService.totalPrice
    this.clientConnecte = this.storageService.clientConnecte()
  }
  treatReservation(accepted:boolean) {
    const statusName = accepted? 'Acceptee': 'Refusee';
    const concessionnaireId = this.reservation.plage.concessionnaire.concessionnaireId;
    console.log('This is the reservation :');
    console.log(this.reservation);
    const reservationId = this.reservation.reservationId;
    this.apiCaller.editReservationStatus(concessionnaireId,reservationId,statusName)
      .subscribe(() => {
        this.router.navigate(['manager-profile/']);
      });


  }

}
