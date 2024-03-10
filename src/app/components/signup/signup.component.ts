import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiCallerService} from "../../service/api-caller.service";
import {ClientRegistrationInput} from "../../model/input/client-registration-input";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public apiCaller: ApiCallerService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      motDePasse: [''],
    });
  }
  ngOnInit() {}
  registerUser() {
    const formData = this.signupForm.value
    const clientData: ClientRegistrationInput =
    {
      prenom : formData.prenom,
      nom : formData.nom,
      email : formData.email,
      motDePasse : formData.motDePasse,
      paysInput : { code:'GB', nom: 'Royaume-Uni'},
      dateHeureInscription : new Date()
    }

    this.apiCaller.signUp(clientData).subscribe(() => {

        this.signupForm.reset();
        this.router.navigate(['log-in']);

    });
  }
}
