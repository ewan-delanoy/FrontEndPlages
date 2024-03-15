import {PaysOutput} from './pays-output';

export interface ClientOutput {
  utilisateurId: number;
  prenom: string;
  nom: string;
  email: string;
  pays: PaysOutput;
  dateHeureInscription: Date;
}
