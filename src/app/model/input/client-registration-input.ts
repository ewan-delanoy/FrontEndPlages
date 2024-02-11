import {PaysInput} from './pays-input';
export interface ClientRegistrationInput {
  _utilisateurId: number;
  prenom: String;
  nom: String;
  email: String;
  motDePasse: String,
  paysInput: PaysInput;
  dateHeureInscription: Date;

}

