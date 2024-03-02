import {PaysOutput} from './pays-output';

export interface ClientOutput {
  utilisateurId: number;
  prenom: String;
  nom: String;
  email: String;
  pays: PaysOutput;
  dateHeureInscription: Date;
}
