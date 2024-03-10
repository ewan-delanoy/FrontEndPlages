import { Injectable } from '@angular/core';
import {ReservationOutput} from "../model/output/reservation-output";
import {dummyPlageOutput, dummyReservationOutput} from "../model/constants";
import {PlageOutput} from "../model/output/plage-output";

@Injectable({
  providedIn: 'root'
})
export class StorageService {


  treatmentAllowedOnReservation: boolean = false
  private viewedReservation: ReservationOutput = dummyReservationOutput
  totalPrice: number = 0
  reservationInProgress: boolean = false
  plage: PlageOutput = dummyPlageOutput
  dateDebut: Date = new Date()
  dateFin: Date = new Date()

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
