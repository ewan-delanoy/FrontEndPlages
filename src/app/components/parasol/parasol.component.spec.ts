import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasolComponent } from './parasol.component';

describe('ParasolComponent', () => {
  let component: ParasolComponent;
  let fixture: ComponentFixture<ParasolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParasolComponent]
    });
    fixture = TestBed.createComponent(ParasolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
