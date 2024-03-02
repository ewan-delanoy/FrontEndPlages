import {UtilisateurOutput} from "./output/utilisateur-output";
import {LoginOutput} from "./output/login-output";
import {PlageOutput} from "./output/plage-output";
import {ClientOutput} from "./output/client-output";
import {LienDeParenteOutput} from "./output/lien-de-parente-output";
import {PaysOutput} from "./output/pays-output";
import {ReservationOutput} from "./output/reservation-output";
import {ConcessionnaireOutput} from "./output/concessionnaire-output";
import {TripleReservationFrontEnd} from "./front-end/triple-reservation-front-end";
import {ReservationListFrontEnd} from "./front-end/reservation-list-front-end";

export const ID_UTILISATEUR_INEXISTANT: number =0;

export const dummyUtilisateurOutput:UtilisateurOutput = {
  utilisateurId : ID_UTILISATEUR_INEXISTANT,
  prenom : "",
  nom : "",
  email: "",
  typeUtilisateur: ""
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
  prenom :"",
  nom: "",
  email: "",
  numeroDeTelephone: ""
};

const dummyPlageOutput:PlageOutput= {
  plageId: 0,
  nom: "",
  concessionnaire: dummyConcessionnaireOutput
};

const dummyPaysOutput:PaysOutput= {
  code :"",
  nom :""
};


const dummyClientOutput:ClientOutput= {
  utilisateurId: 0,
  prenom: "",
  nom: "",
  email: "",
  pays: dummyPaysOutput,
  dateHeureInscription: new Date()
}

const dummyLienDeParenteOutput:LienDeParenteOutput = {
  nom: "",
  coefficient: 0
};

export const dummyReservationOutput:ReservationOutput = {
  plage: dummyPlageOutput,
  reservationId: 0,
  affectations: [],
  client: dummyClientOutput,
  dateDebut: new Date(),
  dateFin: new Date(),
  lienDeParente: dummyLienDeParenteOutput,
  statutNom : ""
}
