import {ConcessionnaireOutput} from "./concessionnaire-output";

export interface PlageOutput {
  plageId: number;
  nom: string;
  concessionnaire: ConcessionnaireOutput;
}
