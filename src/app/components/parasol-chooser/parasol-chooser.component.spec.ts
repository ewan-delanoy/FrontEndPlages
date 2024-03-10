import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasolChooserComponent } from './parasol-chooser.component';

describe('ParasolChooserComponent', () => {
  let component: ParasolChooserComponent;
  let fixture: ComponentFixture<ParasolChooserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParasolChooserComponent]
    });
    fixture = TestBed.createComponent(ParasolChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
