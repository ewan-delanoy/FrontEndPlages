import { Component } from '@angular/core';
import {ApiCallerService} from "../../service/api-caller.service";
import {PlageOutput} from "../../model/output/plage-output";
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {StorageService} from "../../shared/storage.service";
import {ParasolChooserFrontEnd} from "../../model/front-end/parasol-chooser-front-end";
import {PreparationReservationOutput} from "../../model/output/preparation-reservation-output";
import {PreparationReservationInput} from "../../model/input/preparation-reservation-input";

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

  constructor(private apiCaller: ApiCallerService,
              private storage:StorageService) {}


  ngOnInit() {
    if(this.storage.reservationDraftComplete) {
      this.plages = this.storage.reservationStarter.toutesLesPlages
      this.starterIsComplete = true
      this.parasolChooser = this.storage.parasolChooser
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
    this.checkReservationStarterCompletion()
  }

  handleDateDebutChange(event: MatDatepickerInputEvent<Date>):void {
    if (event.value === null) {
      return;
    } else {
      this.storage.reservationStarter.setDateDebut(event.value)
      this.checkReservationStarterCompletion()
    }
  }

  handleDateFinChange(event: MatDatepickerInputEvent<Date>):void {
    if (event.value === null) {
      return;
    } else {
      this.storage.reservationStarter.setDateFin(event.value)
      this.checkReservationStarterCompletion()
    }
  }

  private consistencyCheck(dateBefore:Date | null,dateAfter: Date| null) {
    if(dateBefore === null) {
      return true;
    } else {
      if(dateAfter === null) {
        return true;
      } else {
        return dateBefore <= dateAfter;
      }
    }

  }

  dateDebutFilter = (d: Date | null): boolean => {
    return this.consistencyCheck(d,this.storage.reservationStarter.dateFin);
  };

  dateFinFilter = (d: Date | null): boolean => {
    return this.consistencyCheck(this.storage.reservationStarter.dateDebut,d);
  };

  // appelée après chaque modification venant de l'utilisateur depuis ce composant
  checkReservationStarterCompletion():void {
    if(this.starterIsComplete) {
      return;
    }
    if(!(this.storage.reservationStarter.isComplete())) {
      return;
    }
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
              this.starterIsComplete = true
            }
          )
        }

}
