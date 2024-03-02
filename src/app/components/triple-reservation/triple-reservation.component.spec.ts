import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleReservationComponent } from './triple-reservation.component';

describe('TripleReservationComponent', () => {
  let component: TripleReservationComponent;
  let fixture: ComponentFixture<TripleReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripleReservationComponent]
    });
    fixture = TestBed.createComponent(TripleReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
