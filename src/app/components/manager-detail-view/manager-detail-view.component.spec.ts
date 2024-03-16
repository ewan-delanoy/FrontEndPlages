import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerDetailViewComponent } from './manager-detail-view.component';

describe('ManagerDetailViewComponent', () => {
  let component: ManagerDetailViewComponent;
  let fixture: ComponentFixture<ManagerDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerDetailViewComponent]
    });
    fixture = TestBed.createComponent(ManagerDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
