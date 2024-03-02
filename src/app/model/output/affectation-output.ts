/*
public record AffectationOutput(byte numeroFile, double prixJournalierFile,
  byte numEmplacement,byte nbDeLits,byte nbDeFauteuils) {
}
*/

import {PaysOutput} from "./pays-output";

export interface AffectationOutput {
  numeroFile: number;
  prixJournalierFile: number;
  numEmplacement: number;
  nbDeLits: number;
  nbDeFauteuils: number;
}
