import {inject, NgModule} from '@angular/core';
import {Routes, RouterModule, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
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
import {AuthGuard} from "./shared/auth.guard";

let activator =  [(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(AuthGuard).canActivate(next, state)]

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'customer', component: CustomerComponent, canActivate: activator, children: [
         { path: 'list', component: CustomerListViewComponent, canActivate: activator },
         { path: 'detail', component: CustomerDetailViewComponent, canActivate: activator },
         { path: 'reservation', component: ReservationMainComponent, canActivate: activator, children: [
                { path: 'start', component: ReservationStarterComponent,canActivate: activator },
                { path: 'review', component: ReservationOverviewerComponent, canActivate: activator },
                { path: 'pay', component: ReservationPayerComponent, canActivate: activator },
           ]},
      ]},
  { path: 'manager', component: ManagerComponent, canActivate: activator, children: [
        { path: 'list', component: ManagerListViewComponent, canActivate: activator },
        { path: 'detail', component: ManagerDetailViewComponent, canActivate: activator }
   ] }
  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
