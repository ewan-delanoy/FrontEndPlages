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
import {MonthFrontEnd} from "../model/front-end/month-front-end";
import {EmplacementOutput} from "../model/output/emplacement-output";
import {FileOutput} from "../model/output/file-output";



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
  totalAvantRemise: 0,
  totalApresRemise: 0
}

export const dummyEquipementOutput:EquipementOutput = {
  nom: '',
  nbDeLits: 0,
  nbDeFauteuils : 0
}

export const dummyFileOutput:FileOutput = {
  numero: 0,
  prixJournalier : 0
}

export const dummyEmplacementOutput:EmplacementOutput = {
  file: dummyFileOutput,
  numEmplacement : 0
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

export const dummyPaysInput:PaysInput= {
  code :"",
  nom :""
}

export const tousLesMois: MonthFrontEnd[] = [
  { nom : 'Janvier', numero: 1},
  { nom : 'Février', numero: 2},
  { nom : 'Mars', numero: 3},
  { nom : 'Avril', numero: 4},
  { nom : 'Mai', numero: 5},
  { nom : 'Juin', numero: 6},
  { nom : 'Juillet', numero: 7},
  { nom : 'Août', numero: 8},
  { nom : 'Septembre', numero: 9},
  { nom : 'Octobre', numero: 10},
  { nom : 'Novembre', numero: 11},
  { nom : 'Décembre', numero: 12}
]
