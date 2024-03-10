import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {LoginInput} from "../model/input/login-input";
import {ApiCallerService} from "../service/api-caller.service";
import {dummyUtilisateurOutput} from "../model/constants";
import {ID_UTILISATEUR_INEXISTANT} from "../model/numerical-constants";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = dummyUtilisateurOutput;


  constructor(private apiCaller: ApiCallerService,
              public router: Router) {
  }


  // Sign-in
  signIn(loginInput: LoginInput) {
    return this.apiCaller.login(loginInput)
      .subscribe((loginOutput: any) => {
        this.currentUser = loginOutput.utilisateurConnecte;
        if(this.currentUser.typeUtilisateur === 'Client') {
          this.router.navigate(['client-profile/']);
        }
        if(this.currentUser.typeUtilisateur === 'Concessionnaire') {
          this.router.navigate(['manager-profile/']);
        }
        console.log(`typeUtilisateur ${this.currentUser.typeUtilisateur} not read correctly`);
      });
  }

  get isLoggedIn(): boolean {
    return this.currentUser.utilisateurId !== ID_UTILISATEUR_INEXISTANT;
  }


  doLogout() {
    this.currentUser = dummyUtilisateurOutput;
    this.router.navigate(['log-in']);
  }


}
