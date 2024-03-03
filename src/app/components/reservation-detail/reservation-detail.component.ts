import { Component } from '@angular/core';
import {ReservationOutput} from "../../model/output/reservation-output";
import {dummyReservationOutput, dummyTripleReservation} from "../../model/constants";
import {AuthService} from "../../shared/auth.service";
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

  constructor(
    public storageService: StorageService,
    public apiCaller:ApiCallerService,
    public router:Router
  ) {
    this.reservation = this.storageService.getViewedReservation()
    this.treatmentAllowedOnReservation = this.storageService.treatmentAllowedOnReservation
    this.totalPrice = this.storageService.totalPrice
  }
  treatReservation(accepted:boolean) {
    this.router.navigate(['reservation-detail/']);
  }

}
