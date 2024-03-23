import { Component } from '@angular/core';
import {ApiCallerService} from "../../service/api-caller.service";
import {StorageService} from "../../shared/storage.service";
import {MonthFrontEnd} from "../../model/front-end/month-front-end";
import {tousLesMois} from "../../shared/constants";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ReservationInput} from "../../model/input/reservation-input";
import {AffectationOutput} from "../../model/output/affectation-output";
import {AffectationInput} from "../../model/input/affectation-input";
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";

@Component({
  selector: 'app-reservation-payer',
  templateUrl: './reservation-payer.component.html',
  styleUrls: ['./reservation-payer.component.css']
})
export class ReservationPayerComponent {


  tousLesMois: MonthFrontEnd[] = []
  toutesLesAnnees: number [] = []
  prixTotal: number = 0

  paymentForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    private apiCaller: ApiCallerService,
    private storage:StorageService,
    public router: Router
  ) {
    this.paymentForm = this.fb.group({
      numeroCarte:['',[Validators.required, Validators.pattern("[0-9]{16}")]],
      anneeExpiration: [''],
      moisExpiration: [''],
      cryptogramme: ['',[Validators.required, Validators.pattern("[0-9]{3}")]]
    })
    this.tousLesMois = tousLesMois
    const currentYear = new Date().getFullYear();
    for(let i = 0; i<=9 ;i++) {(this.toutesLesAnnees).push(currentYear+i)}
    this.prixTotal = this.storage.parasolChooser.totalApresRemise
  }

  errorMessageNecessaryForFormElement(elementName:string): boolean {
    let element = this.paymentForm.get(elementName)
    if(element === null) { return false }
    return element.invalid && (element.dirty || element.touched)
  }

  formElementHasError(elementName:string,errorName:string) {
    let element = this.paymentForm.get(elementName)
    if(element === null) { return false }
    return element.errors?.[errorName]
  }

  pay() {

    let reservationInput:ReservationInput= {
      clientId: this.storage.currentUser.utilisateurId,
      plageId: this.storage.reservationStarter.plage.plageId,
      affectations: this.storage.parasolChooser.affectations.map(
        this.affectationOutputToInput
      ),
      dateDebut: this.storage.reservationStarter.dateDebut,
      dateFin: this.storage.reservationStarter.dateFin,
      lienDeParenteNom: this.storage.parasolChooser.lienDeParente.nom,
      numeroCarte : this.paymentForm.value.numeroCarte,
      anneeExpiration : this.paymentForm.value.anneeExpiration,
      moisExpiration : this.paymentForm.value.moisExpiration,
      cryptogramme : this.paymentForm.value.cryptogramme
    }
    return this.apiCaller.sendReservation(reservationInput)
      .subscribe(() => {
        this.storage.reservationDraftComplete = false
        this.storage.parasolChooser = new ParasolChooserFrontEnd()
        this.router.navigate(['customer/list'])
      })
  }

  affectationOutputToInput(affectation : AffectationOutput):AffectationInput {
    return {
      numeroFile: affectation.emplacement.file.numero,
      numEmplacement: affectation.emplacement.numEmplacement,
      nbDeLits: affectation.equipement.nbDeLits,
      nbDeFauteuils : affectation.equipement.nbDeFauteuils
    }
  }
}
