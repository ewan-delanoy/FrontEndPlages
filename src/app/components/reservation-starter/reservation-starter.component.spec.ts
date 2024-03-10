import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationStarterComponent } from './reservation-starter.component';

describe('ReservationStarterComponent', () => {
  let component: ReservationStarterComponent;
  let fixture: ComponentFixture<ReservationStarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationStarterComponent]
    });
    fixture = TestBed.createComponent(ReservationStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
