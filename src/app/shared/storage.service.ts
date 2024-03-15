import { Injectable } from '@angular/core';
import {ReservationOutput} from "../model/output/reservation-output";
import {dummyReservationOutput, dummyUtilisateurOutput} from "./constants";
import {ReservationStarterFrontEnd} from "../model/front-end/reservation-starter-front-end";
import {ParasolChooserFrontEnd} from "../model/front-end/parasol-chooser-front-end";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  currentUser = dummyUtilisateurOutput;

  treatmentAllowedOnReservation: boolean = false
  private viewedReservation: ReservationOutput = dummyReservationOutput
  totalPrice: number = 0
  reservationDraftComplete: boolean = false
  reservationStarter: ReservationStarterFrontEnd = new ReservationStarterFrontEnd()
  parasolChooser: ParasolChooserFrontEnd = new ParasolChooserFrontEnd()

  constructor(private router: Router) { }

  getViewedReservation():  ReservationOutput {
    return this.viewedReservation;
  }
  setViewedReservation(newReservation:ReservationOutput) {
    this.viewedReservation = newReservation
    this.totalPrice =
    newReservation.affectations.reduce(
       (sum, affectation) => sum + affectation.file.prixJournalier, 0)

  }

  afterSelectionIsFinished(finishedChooser:ParasolChooserFrontEnd) {
    this.parasolChooser = finishedChooser
    this.reservationDraftComplete = true
    this.router.navigate(['confirm-reservation'])
  }

  clientConnecte():boolean {
    return this.currentUser.estUnClient
  }

}
