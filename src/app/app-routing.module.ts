import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

import {ManagerProfileComponent} from "./components/manager-profile/manager-profile.component";
import {ReservationStarterComponent} from "./components/reservation-starter/reservation-starter.component";
import {ReservationOverviewerComponent} from "./components/reservation-overviewer/reservation-overviewer.component";
import {HomeComponent} from "./components/home/home.component";
import {CustomerComponent} from './components/customer/customer.component';
import {ManagerComponent} from "./components/manager/manager.component";
import {ReservationPayerComponent} from "./components/reservation-payer/reservation-payer.component";
import {CustomerProfileComponent} from "./components/customer-profile/customer-profile.component";
import {CustomerListViewComponent} from "./components/customer-list-view/customer-list-view.component";
import {CustomerDetailViewComponent} from "./components/customer-detail-view/customer-detail-view.component";
import {ManagerListViewComponent} from "./components/manager-list-view/manager-list-view.component";
import {ManagerDetailViewComponent} from "./components/manager-detail-view/manager-detail-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'customer', component: CustomerComponent, children: [
      { path: 'profile', component: CustomerProfileComponent , children: [
         { path: 'list', component: CustomerListViewComponent },
         { path: 'detail', component: CustomerDetailViewComponent }
      ]},
      { path: 'start-reservation', component: ReservationStarterComponent },
      { path: 'review-reservation', component: ReservationOverviewerComponent },
      { path: 'pay-reservation', component: ReservationPayerComponent },
    ]
  },
  { path: 'manager', component: ManagerComponent, children: [
      { path: 'profile', component: ManagerProfileComponent , children: [
        { path: 'list', component: ManagerListViewComponent },
        { path: 'detail', component: ManagerDetailViewComponent }
      ] }
   ] }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
