import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { TripleReservationComponent } from './components/triple-reservation/triple-reservation.component';
import { ReservationBlockComponent } from './components/reservation-block/reservation-block.component';
import { FrencheuroPipe } from './pipes/frencheuro.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from "@angular/material/input";
import { MatDatepickerModule} from "@angular/material/datepicker";
import { MAT_DATE_LOCALE, MatNativeDateModule } from "@angular/material/core";
import { ReservationStarterComponent } from './components/reservation-starter/reservation-starter.component';
import { ParasolChooserComponent } from './components/parasol-chooser/parasol-chooser.component';
import { ParasolComponent } from './components/parasol/parasol.component';
import { ReductionPipe } from './pipes/reduction.pipe';
import { ReservationOverviewerComponent } from './components/reservation-overviewer/reservation-overviewer.component';
import { FrenchDatePipe } from './pipes/french-date.pipe';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ReservationPayerComponent } from './components/reservation-payer/reservation-payer.component';
import { CustomerListViewComponent } from './components/customer-list-view/customer-list-view.component';
import { CustomerDetailViewComponent } from './components/customer-detail-view/customer-detail-view.component';
import { ManagerListViewComponent } from './components/manager-list-view/manager-list-view.component';
import { ManagerDetailViewComponent } from './components/manager-detail-view/manager-detail-view.component';
import { NombreParasolsPipe } from './pipes/nombre-parasols.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    TripleReservationComponent,
    ReservationBlockComponent,
    FrencheuroPipe,
    ReservationStarterComponent,
    ParasolChooserComponent,
    ParasolComponent,
    ReductionPipe,
    ReservationOverviewerComponent,
    FrenchDatePipe,
    HomeComponent,
    CustomerComponent,
    ManagerComponent,
    ReservationPayerComponent,
    CustomerListViewComponent,
    CustomerDetailViewComponent,
    ManagerListViewComponent,
    ManagerDetailViewComponent,
    NombreParasolsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
