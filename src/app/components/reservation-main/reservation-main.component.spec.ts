import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationMainComponent } from './reservation-main.component';

describe('ReservationMainComponent', () => {
  let component: ReservationMainComponent;
  let fixture: ComponentFixture<ReservationMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationMainComponent]
    });
    fixture = TestBed.createComponent(ReservationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
