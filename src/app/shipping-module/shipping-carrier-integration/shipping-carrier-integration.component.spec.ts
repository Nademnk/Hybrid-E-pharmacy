import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCarrierIntegrationComponent } from './shipping-carrier-integration.component';

describe('ShippingCarrierIntegrationComponent', () => {
  let component: ShippingCarrierIntegrationComponent;
  let fixture: ComponentFixture<ShippingCarrierIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShippingCarrierIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingCarrierIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
