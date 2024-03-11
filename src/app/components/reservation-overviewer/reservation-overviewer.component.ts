import { Component } from '@angular/core';
import {dummyReservationInput} from "../../shared/constants";
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";
import {ReservationInput} from "../../model/input/reservation-input";
import {AuthService} from "../../shared/auth.service";
import {StorageService} from "../../shared/storage.service";
import {AffectationInput} from "../../model/input/affectation-input";
import {AffectationFrontEnd} from "../../model/front-end/affectation-front-end";

@Component({
  selector: 'app-reservation-overviewer',
  templateUrl: './reservation-overviewer.component.html',
  styleUrls: ['./reservation-overviewer.component.css']
})
export class ReservationOverviewerComponent {

  finishedChooser: ParasolChooserFrontEnd = new ParasolChooserFrontEnd()
  reservationToBeSent:ReservationInput = dummyReservationInput
  totalPrice: number = 0

  constructor( /* private apiCaller:ApiCallerService, */
              private storage: StorageService,
              private authService: AuthService,
              /* private router: Router */) { }

  ngOnInit() {
    this.finishedChooser = this.storage.parasolChooser
    this.totalPrice =
      this.finishedChooser.affectations.reduce(
        (sum, affectation) => sum + affectation.file.prixJournalier, 0)

    this.reservationToBeSent = {
      clientId: this.authService.currentUser.utilisateurId,
      plageId: this.storage.reservationStarter.plage.plageId,
      affectations: this.finishedChooser.affectations.map(
        this.affectationFrontEndToInput
      ),
      dateDebut: this.storage.reservationStarter.dateDebut,
      dateFin: this.storage.reservationStarter.dateFin,
      lienDeParenteNom: this.finishedChooser.lienDeParente.nom
    }
  }

    affectationFrontEndToInput(affectation : AffectationFrontEnd):AffectationInput {
      return {
        numeroFile: affectation.file.numero,
        numEmplacement: affectation.numEmplacement,
        nbDeLits: affectation.equipement.nbDeLits,
        nbDeFauteuils : affectation.equipement.nbDeFauteuils
      }
    }

}
