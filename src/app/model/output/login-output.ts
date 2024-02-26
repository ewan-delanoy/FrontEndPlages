import {UtilisateurOutput} from "./utilisateur-output";

export interface LoginOutput {
  codeErreur: number;
  utilisateurConnecte: UtilisateurOutput;

}
