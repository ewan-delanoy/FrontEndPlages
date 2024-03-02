import {PaysOutput} from './pays-output';

export interface UtilisateurOutput {
  utilisateurId: number;
  prenom: String;
  nom: String;
  email: String;
  pays?: PaysOutput;
  dateHeureInscription?: Date;
  numeroDeTelephone?: String;
  typeUtilisateur: String;
}
