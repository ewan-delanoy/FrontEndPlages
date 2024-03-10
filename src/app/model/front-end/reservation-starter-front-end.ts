import {PlageOutput} from "../output/plage-output";


export class ReservationStarterFrontEnd {
  toutesLesPlages : PlageOutput[] = []
  plage : (PlageOutput | null) = null
  dateDebut: (Date | null) = null
  dateFin : (Date | null) = null
  isComplete(): boolean {
    return (this.plage !== null) && (this.dateDebut !== null) && (this.dateFin !== null)
  }
   constructor() {}
}
