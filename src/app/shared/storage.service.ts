import { Injectable } from '@angular/core';
import {ReservationOutput} from "../model/output/reservation-output";
import { dummyReservationOutput, dummyUtilisateurOutput} from "./constants";
import {ReservationStarterFrontEnd} from "../model/front-end/reservation-starter-front-end";
import {ParasolChooserFrontEnd} from "../model/front-end/parasol-chooser-front-end";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  currentUser = dummyUtilisateurOutput;

  // traitement des réservations passées : visualisation
  treatmentAllowedOnPastReservation: boolean = false
  pastReservation: ReservationOutput = dummyReservationOutput

  // traitement des réservations futures : remplissage progressif
  reservationDraftComplete: boolean = false
  reservationStarter: ReservationStarterFrontEnd = new ReservationStarterFrontEnd()
  parasolChooser: ParasolChooserFrontEnd = new ParasolChooserFrontEnd()


  constructor(private router: Router) { }




  afterSelectionIsFinished(finishedChooser:ParasolChooserFrontEnd) {
    this.parasolChooser = finishedChooser
    this.reservationDraftComplete = true
    this.router.navigate(['customer/reservation/review'])
  }

  clientConnecte():boolean {
    return this.currentUser.estUnClient
  }

}
