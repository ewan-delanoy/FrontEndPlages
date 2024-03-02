import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationBlockComponent } from './reservation-block.component';

describe('ReservationBlockComponent', () => {
  let component: ReservationBlockComponent;
  let fixture: ComponentFixture<ReservationBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationBlockComponent]
    });
    fixture = TestBed.createComponent(ReservationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
