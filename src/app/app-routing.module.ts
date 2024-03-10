import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
// import { AuthGuard } from "./shared/auth.guard";
import {ClientProfileComponent} from "./components/client-profile/client-profile.component";
import {ManagerProfileComponent} from "./components/manager-profile/manager-profile.component";
import {ReservationDetailComponent} from "./components/reservation-detail/reservation-detail.component";
import {ReservationStarterComponent} from "./components/reservation-starter/reservation-starter.component";
import {ReservationOverviewerComponent} from "./components/reservation-overviewer/reservation-overviewer.component";

const routes: Routes = [
  // { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'start-reservation', component: ReservationStarterComponent },
  { path: 'confirm-reservation', component: ReservationOverviewerComponent },
  { path: 'client-profile', component: ClientProfileComponent /* , canActivate: [AuthGuard] */ },
  { path: 'manager-profile', component: ManagerProfileComponent /* , canActivate: [AuthGuard] */ },
  { path: 'reservation-detail', component: ReservationDetailComponent /* , canActivate: [AuthGuard] */ }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
