import { Injectable } from '@angular/core';
import {ReservationOutput} from "../model/output/reservation-output";
import {dummyReservationOutput} from "./constants";
import {ReservationStarterFrontEnd} from "../model/front-end/reservation-starter-front-end";

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  treatmentAllowedOnReservation: boolean = false
  private viewedReservation: ReservationOutput = dummyReservationOutput
  totalPrice: number = 0
  reservationInProgress: boolean = false
  reservationStarter: ReservationStarterFrontEnd = new ReservationStarterFrontEnd()

  constructor() { }

  getViewedReservation():  ReservationOutput {
    return this.viewedReservation;
  }
  setViewedReservation(newReservation:ReservationOutput) {
    this.viewedReservation = newReservation
    this.totalPrice =
    newReservation.affectations.reduce(
       (sum, affectation) => sum + affectation.prixJournalierFile, 0)

  }

}
