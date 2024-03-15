import {PaysOutput} from './pays-output';

export interface UtilisateurOutput {
  utilisateurId: number;
  prenom: string;
  nom: string;
  email: string;
  pays?: PaysOutput;
  dateHeureInscription?: Date;
  numeroDeTelephone?: string;
  estUnClient: boolean;
}
