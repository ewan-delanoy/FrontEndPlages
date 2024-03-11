import {PaysInput} from './pays-input';
export interface ClientRegistrationInput {
  prenom: string
  nom: string
  email: string
  motDePasse: string
  paysInput: PaysInput
  dateHeureInscription: Date
}

