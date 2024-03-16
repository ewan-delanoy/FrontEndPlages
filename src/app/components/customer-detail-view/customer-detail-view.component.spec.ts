import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailViewComponent } from './customer-detail-view.component';

describe('CustomerDetailViewComponent', () => {
  let component: CustomerDetailViewComponent;
  let fixture: ComponentFixture<CustomerDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerDetailViewComponent]
    });
    fixture = TestBed.createComponent(CustomerDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
