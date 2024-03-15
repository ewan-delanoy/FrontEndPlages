import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {ApiCallerService} from "../../service/api-caller.service";
import {ClientRegistrationInput} from "../../model/input/client-registration-input";
import {PaysInput} from "../../model/input/pays-input";
import {PaysOutput} from "../../model/output/pays-output";
import {dummyPaysInput} from "../../shared/constants";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  countries: PaysInput[]= []

  constructor(
    public fb: FormBuilder,
    public apiCaller: ApiCallerService,
    public router: Router
  ) {
    this.signupForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      motDePasse: ['', [Validators.required]],
      pays: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    this.apiCaller.getPays().subscribe(
      (countries:PaysOutput[]) => {
        this.countries = countries.map( this.paysOutputToInput)
      }
    )
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // Handle form submission here
      this.registerUser()
    }
  }

  registerUser() {
    const formData = this.signupForm.value
    const paysOuUndefined =
      this.countries.find( p => p.code == formData.pays)
    const pays:PaysInput = paysOuUndefined === undefined ? dummyPaysInput : paysOuUndefined;
    const clientData: ClientRegistrationInput =
    {
      prenom : formData.prenom,
      nom : formData.nom,
      email : formData.email,
      motDePasse : formData.motDePasse,
      paysInput : pays,
      dateHeureInscription : new Date()
    }
    console.log('Here is the client data : ',clientData)

    this.apiCaller.signUp(clientData).subscribe(() => {

        this.signupForm.reset();
        this.router.navigate(['log-in']);

    });
  }

  elementIncorrect(nomElement:string):boolean {
    const maybeNull = this.signupForm.get(nomElement)
    return maybeNull === null ? true : (!(maybeNull.valid))
  }

  paysOutputToInput(p: PaysOutput):PaysInput {
     return p
  }
}
