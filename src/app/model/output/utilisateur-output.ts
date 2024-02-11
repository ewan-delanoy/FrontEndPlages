import {PaysOutput} from './pays-output';

export interface UtilisateurOutput {
  _utilisateurId: number;
  prenom: String;
  nom: String;
  email: String;
  pays?: PaysOutput;
  dateHeureInscription?: Date;
  numeroDeTelephone?: String
}
