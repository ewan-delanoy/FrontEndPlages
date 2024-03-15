import { Component } from '@angular/core';
import {ApiCallerService} from "../../service/api-caller.service";
import {PlageOutput} from "../../model/output/plage-output";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {StorageService} from "../../shared/storage.service";
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";
import {PreparationReservationOutput} from "../../model/output/preparation-reservation-output";
import {PreparationReservationInput} from "../../model/input/preparation-reservation-input";
import {dummyPlageOutput} from "../../shared/constants";

@Component({
  selector: 'app-reservation-starter',
  templateUrl: './reservation-starter.component.html',
  styleUrls: ['./reservation-starter.component.css']
})
export class ReservationStarterComponent {

  minDate: Date = new Date()
  // données dupliquées et remodifiées à chaque fois dans le storageService
  plages:PlageOutput[]=[]
  starterIsComplete:boolean=false
  // donnée dupliquée dans le storageService, mais seulement à l'envoi de la réservation
  parasolChooser:ParasolChooserFrontEnd = new ParasolChooserFrontEnd()
  // utilisés seulemnt dans le cas d'un retour
  plageRetour: PlageOutput = dummyPlageOutput
  dateDebutRetour: (Date | null) = null
  dateFinRetour: (Date | null) = null

  constructor(private apiCaller: ApiCallerService,
              private storage:StorageService) {}


  ngOnInit() {
    if(this.storage.reservationDraftComplete) {
      this.plages = this.storage.reservationStarter.toutesLesPlages
      this.starterIsComplete = true
      this.parasolChooser = this.storage.parasolChooser
      this.plageRetour = this.storage.reservationStarter.plage
      this.dateDebutRetour = this.storage.reservationStarter.dateDebut
      this.dateFinRetour = this.storage.reservationStarter.dateFin
    } else {
      this.apiCaller.getPlages().subscribe(
        (plages: PlageOutput[]) => {
          this.plages = plages
          this.storage.reservationStarter.toutesLesPlages = plages
        }
      )
    }
  }

  handlePlageSelection(nomPlage:string){
    console.log("the selected value is " + nomPlage);
    console.log("the list is :",this.plages)
    const plage:(PlageOutput|undefined) =
      this.plages.find( plage =>
      {return plage.nom === nomPlage})
    console.log("just found :",plage)
    if (plage !== undefined) this.storage.reservationStarter.setPlage(plage)
    this.reloadParasolChooserIfNeeded()
  }

  handleDateDebutChange(event: MatDatepickerInputEvent<Date>):void {
    if (event.value === null) {
      return;
    } else {
      this.storage.reservationStarter.setDateDebut(event.value)
      this.reloadParasolChooserIfNeeded()
    }
  }

  handleDateFinChange(event: MatDatepickerInputEvent<Date>):void {
    if (event.value === null) {
      return;
    } else {
      this.storage.reservationStarter.setDateFin(event.value)
      this.reloadParasolChooserIfNeeded()
    }
  }

  dateDebutFilter = (d: Date | null): boolean => {
    if( (!this.storage.reservationStarter.dateFinEstChoisie()) || (d === null)) {
       return true
    } else {
      return d <= this.storage.reservationStarter.dateFin
    }
  }

  dateFinFilter = (d: Date | null): boolean => {
    if( (!this.storage.reservationStarter.dateDebutEstChoisie()) || (d === null)) {
      return true
    } else {
      return this.storage.reservationStarter.dateDebut <= d
    }
  }

  // appelée après chaque modification venant de l'utilisateur depuis ce composant
  reloadParasolChooserIfNeeded():void {
    if(this.storage.reservationStarter.isComplete()) {
      this.reloadParasolChooser()
    }

  }



reloadParasolChooser():void {

  const plage:PlageOutput = this.storage.reservationStarter.plage
  const dateDebut:Date = this.storage.reservationStarter.dateDebut
  const dateFin:Date = this.storage.reservationStarter.dateFin
  const prepInput:PreparationReservationInput = {
    plageId : plage.plageId,
    dateDebut: dateDebut,
    dateFin : dateFin
  }
  this.apiCaller.prepareForm(prepInput).subscribe(
  (prep: PreparationReservationOutput) => {
      this.parasolChooser = new ParasolChooserFrontEnd(prep)
      // maintenant que this.parasolChooser a la bonne valeur,
      // on peut afficher le composant sur la page
      this.starterIsComplete = true
    }
  )
}

}
