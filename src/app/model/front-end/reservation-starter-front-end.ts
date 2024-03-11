import {PlageOutput} from "../output/plage-output";
import {dummyPlageOutput} from "../../shared/constants";


export class ReservationStarterFrontEnd {
  toutesLesPlages : PlageOutput[] = []
  plage : PlageOutput = dummyPlageOutput
  dateDebut: Date = new Date()
  dateFin : Date  = new Date()
  private plageChoisie: boolean = false
  private dateDebutChoisie: boolean = false
  private dateFinChoisie: boolean = false
  isComplete(): boolean {
    return this.plageChoisie && this.dateDebutChoisie && this.dateFinChoisie
  }
  setPlage(newPlage:PlageOutput) { this.plage=newPlage;this.plageChoisie=true; }
  setDateDebut(newDate:Date) { this.dateDebut=newDate;this.dateDebutChoisie=true; }
  setDateFin(newDate:Date) { this.dateFin=newDate;this.dateFinChoisie=true; }
   constructor() {}
}
