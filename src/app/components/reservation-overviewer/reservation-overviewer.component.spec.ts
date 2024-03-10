import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationOverviewerComponent } from './reservation-overviewer.component';

describe('ReservationOverviewerComponent', () => {
  let component: ReservationOverviewerComponent;
  let fixture: ComponentFixture<ReservationOverviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationOverviewerComponent]
    });
    fixture = TestBed.createComponent(ReservationOverviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
