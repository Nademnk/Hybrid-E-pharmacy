import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingRateCalculationComponent } from './shipping-rate-calculation.component';

describe('ShippingRateCalculationComponent', () => {
  let component: ShippingRateCalculationComponent;
  let fixture: ComponentFixture<ShippingRateCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingRateCalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingRateCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
