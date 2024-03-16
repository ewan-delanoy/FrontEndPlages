import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationPayerComponent } from './reservation-payer.component';

describe('ReservationPayerComponent', () => {
  let component: ReservationPayerComponent;
  let fixture: ComponentFixture<ReservationPayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationPayerComponent]
    });
    fixture = TestBed.createComponent(ReservationPayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
