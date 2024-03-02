import {ConcessionnaireOutput} from "./concessionnaire-output";

export interface PlageOutput {
  plageId: number;
  nom: String;
  concessionnaire: ConcessionnaireOutput;
}
