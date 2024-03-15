import {UtilisateurOutput} from "../model/output/utilisateur-output";
import {LoginOutput} from "../model/output/login-output";
import {PlageOutput} from "../model/output/plage-output";
import {ClientOutput} from "../model/output/client-output";
import {LienDeParenteOutput} from "../model/output/lien-de-parente-output";
import {PaysOutput} from "../model/output/pays-output";
import {ReservationOutput} from "../model/output/reservation-output";
import {ConcessionnaireOutput} from "../model/output/concessionnaire-output";
import {TripleReservationFrontEnd} from "../model/front-end/triple-reservation-front-end";
import {ReservationListFrontEnd} from "../model/front-end/reservation-list-front-end";
import {ID_UTILISATEUR_INEXISTANT} from "./numerical-constants";
import {EquipementOutput} from "../model/output/equipement-output";
import {ReservationInput} from "../model/input/reservation-input";
import {PaysInput} from "../model/input/pays-input";
import {PartialReservationInput} from "../model/input/partial-reservation-input";



export const dummyUtilisateurOutput:UtilisateurOutput = {
  utilisateurId : ID_UTILISATEUR_INEXISTANT,
  prenom : "",
  nom : "",
  email: "",
  estUnClient: false
};

export const dummyLoginOutput:LoginOutput = {
  codeErreur: 1,
  utilisateurConnecte: dummyUtilisateurOutput
};

export const dummyTripleReservation:TripleReservationFrontEnd = {
  acceptees : new ReservationListFrontEnd(false, true,[]),
  enAttente : new ReservationListFrontEnd(false,false,[]),
  refusees  : new ReservationListFrontEnd(false,false,[])
};

const dummyConcessionnaireOutput:ConcessionnaireOutput= {
  concessionnaireId: 0,
  prenom :"",
  nom: "",
  email: "",
  numeroDeTelephone: ""
};

export const dummyPlageOutput:PlageOutput= {
  plageId: 0,
  nom: "",
  concessionnaire: dummyConcessionnaireOutput
}

const dummyPaysOutput:PaysOutput= {
  code :"",
  nom :""
}


const dummyClientOutput:ClientOutput= {
  utilisateurId: 0,
  prenom: "",
  nom: "",
  email: "",
  pays: dummyPaysOutput,
  dateHeureInscription: new Date()
}

export const dummyLienDeParenteOutput:LienDeParenteOutput = {
  nom: "",
  coefficient: 0,
  noDiscount: true
}

export const dummyReservationOutput:ReservationOutput = {
  plage: dummyPlageOutput,
  reservationId: 0,
  affectations: [],
  client: dummyClientOutput,
  dateDebut: new Date(),
  dateFin: new Date(),
  lienDeParente: dummyLienDeParenteOutput,
  statutNom : "",
  numeroCarte: '',
  anneeExpiration: 0,
  moisExpiration: 0,
}

export const dummyEquipementOutput:EquipementOutput = {
  nom: '',
  nbDeLits: 0,
  nbDeFauteuils : 0
}

export const dummyReservationInput:ReservationInput = {
  clientId: 0,
  plageId: 0,
  affectations : [],
  dateDebut: new Date(),
  dateFin: new Date(),
  lienDeParenteNom: '',
  numeroCarte: '',
  anneeExpiration: 0,
  moisExpiration: 0,
  cryptogramme: ''
}

export const dummyPartialReservationInput:PartialReservationInput = {
  clientId: 0,
  plageId: 0,
  affectations : [],
  dateDebut: new Date(),
  dateFin: new Date(),
  lienDeParenteNom: ''
}
export const dummyPaysInput:PaysInput= {
  code :"",
  nom :""
}