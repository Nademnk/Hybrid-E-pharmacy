import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingCarrierIntegrationComponent } from './shipping-carrier-integration/shipping-carrier-integration.component';
import { ShippingRateCalculationComponent } from './shipping-rate-calculation/shipping-rate-calculation.component';
import { TrackingInformationComponent } from './tracking-information/tracking-information.component';



@NgModule({
  declarations: [
    ShippingCarrierIntegrationComponent,
    ShippingRateCalculationComponent,
    TrackingInformationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShippingModuleModule { }
