import { Component } from '@angular/core';
import {dummyLienDeParenteOutput, dummyPartialReservationInput, dummyReservationInput} from "../../shared/constants";
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";
import {ReservationInput} from "../../model/input/reservation-input";
import {StorageService} from "../../shared/storage.service";
import {AffectationInput} from "../../model/input/affectation-input";
import {Router} from "@angular/router";
import {ApiCallerService} from "../../service/api-caller.service";
import {AffectationOutput} from "../../model/output/affectation-output";
import {LienDeParenteOutput} from "../../model/output/lien-de-parente-output";
import {PartialReservationInput} from "../../model/input/partial-reservation-input";




@Component({
  selector: 'app-reservation-overviewer',
  templateUrl: './reservation-overviewer.component.html',
  styleUrls: ['./reservation-overviewer.component.css']
})
export class ReservationOverviewerComponent {

  finishedChooser: ParasolChooserFrontEnd = new ParasolChooserFrontEnd()
  reservationToBeSent:PartialReservationInput = dummyPartialReservationInput
  totalPrice: number = 0
  nomPlage: string = ''
  prenomConcessionnaire: string = ''
  nomConcessionnaire: string = ''
  dateDebut: Date = new Date()
  dateFin: Date = new Date()
  lienDeParente: LienDeParenteOutput = dummyLienDeParenteOutput


  constructor( private apiCaller:ApiCallerService,
              private storage: StorageService,
              private router: Router ) { }

  ngOnInit() {

    this.finishedChooser = this.storage.parasolChooser
    console.log('Here is the ldp :',this.finishedChooser.lienDeParente.nom)
    this.nomPlage = this.storage.reservationStarter.plage.nom
    this.prenomConcessionnaire = this.storage.reservationStarter.plage.concessionnaire.prenom
    this.nomConcessionnaire = this.storage.reservationStarter.plage.concessionnaire.nom
    this.dateDebut = this.storage.reservationStarter.dateDebut
    this.dateFin = this.storage.reservationStarter.dateFin
    this.lienDeParente = this.finishedChooser.lienDeParente
    this.totalPrice =
      this.finishedChooser.affectations.reduce(
        (sum, affectation) => sum + affectation.file.prixJournalier, 0)

    this.reservationToBeSent = {
      clientId: this.storage.currentUser.utilisateurId,
      plageId: this.storage.reservationStarter.plage.plageId,
      affectations: this.finishedChooser.affectations.map(
        this.affectationOutputToInput
      ),
      dateDebut: this.storage.reservationStarter.dateDebut,
      dateFin: this.storage.reservationStarter.dateFin,
      lienDeParenteNom: this.finishedChooser.lienDeParente.nom
    }
  }

    affectationOutputToInput(affectation : AffectationOutput):AffectationInput {
      return {
        numeroFile: affectation.file.numero,
        numEmplacement: affectation.numEmplacement,
        nbDeLits: affectation.equipement.nbDeLits,
        nbDeFauteuils : affectation.equipement.nbDeFauteuils
      }
    }

    cancelReservation() {
      this.storage.reservationDraftComplete = false
      this.storage.parasolChooser = new ParasolChooserFrontEnd()
      this.router.navigate(['client-profile'])
    }

    goBack() {
      this.router.navigate(['start-reservation'])
    }

    sendReservation() {
      /*
      this.apiCaller.sendReservation(this.reservationToBeSent).subscribe(
        () => {
          this.router.navigate(['client-profile'])
        }
      )
      */
    }

  proceedToPayment() {
  }

}
