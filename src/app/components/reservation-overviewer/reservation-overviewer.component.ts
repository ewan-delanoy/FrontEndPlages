import { Component } from '@angular/core';
import {dummyLienDeParenteOutput} from "../../shared/constants";
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";
import {StorageService} from "../../service/storage.service";
import {Router} from "@angular/router";
import {AffectationOutput} from "../../model/output/affectation-output";
import {LienDeParenteOutput} from "../../model/output/lien-de-parente-output";





@Component({
  selector: 'app-reservation-overviewer',
  templateUrl: './reservation-overviewer.component.html',
  styleUrls: ['./reservation-overviewer.component.css']
})
export class ReservationOverviewerComponent {

  priceBeforeDiscount: number = 0
  nomPlage: string = ''
  prenomConcessionnaire: string = ''
  nomConcessionnaire: string = ''
  dateDebut: Date = new Date()
  dateFin: Date = new Date()
  lienDeParente: LienDeParenteOutput = dummyLienDeParenteOutput
  affectations: AffectationOutput[] = []

  constructor(private storage: StorageService,private router:Router) { }

  ngOnInit() {

    this.nomPlage = this.storage.reservationStarter.plage.nom
    this.prenomConcessionnaire = this.storage.reservationStarter.plage.concessionnaire.prenom
    this.nomConcessionnaire = this.storage.reservationStarter.plage.concessionnaire.nom
    this.dateDebut = this.storage.reservationStarter.dateDebut
    this.dateFin = this.storage.reservationStarter.dateFin
    this.lienDeParente = this.storage.parasolChooser.lienDeParente
    this.affectations = this.storage.parasolChooser.affectations
    this.priceBeforeDiscount =  this.storage.parasolChooser.totalAvantRemise
  }

    cancelReservation() {
      this.storage.reservationDraftComplete = false
      this.storage.parasolChooser = new ParasolChooserFrontEnd()
      this.router.navigate(['customer/list'])
    }

    goBack() {
      this.router.navigate(['customer/reservation/start'])
    }

  proceedToPayment() {
   this.router.navigate(['customer/reservation/pay'])
  }

}
