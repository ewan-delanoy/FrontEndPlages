import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import {ReservationStarterComponent} from "./components/reservation-starter/reservation-starter.component";
import {ReservationOverviewerComponent} from "./components/reservation-overviewer/reservation-overviewer.component";
import {HomeComponent} from "./components/home/home.component";
import {CustomerComponent} from './components/customer/customer.component';
import {ManagerComponent} from "./components/manager/manager.component";
import {ReservationPayerComponent} from "./components/reservation-payer/reservation-payer.component";
import {CustomerListViewComponent} from "./components/customer-list-view/customer-list-view.component";
import {CustomerDetailViewComponent} from "./components/customer-detail-view/customer-detail-view.component";
import {ManagerListViewComponent} from "./components/manager-list-view/manager-list-view.component";
import {ManagerDetailViewComponent} from "./components/manager-detail-view/manager-detail-view.component";
import {ReservationMainComponent} from "./components/reservation-main/reservation-main.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'customer', component: CustomerComponent, children: [
         { path: 'list', component: CustomerListViewComponent },
         { path: 'detail', component: CustomerDetailViewComponent },
         { path: 'reservation', component: ReservationMainComponent, children: [
                { path: 'start', component: ReservationStarterComponent },
                { path: 'review', component: ReservationOverviewerComponent },
                { path: 'pay', component: ReservationPayerComponent },
           ]},
      ]},
  { path: 'manager', component: ManagerComponent, children: [
        { path: 'list', component: ManagerListViewComponent },
        { path: 'detail', component: ManagerDetailViewComponent }
   ] }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
