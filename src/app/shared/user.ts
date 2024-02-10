import {Pays} from './pays';

export class User {
  _utilisateurId?: number;
  prenom?: String;
  nom?: String;
  email?: String;
  pays?: Pays;
  dateHeureInscription?: Date;
  numeroDeTelephone?: String
}
