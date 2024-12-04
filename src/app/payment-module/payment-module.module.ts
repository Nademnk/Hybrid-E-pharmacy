import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { PaymentGatewayIntegrationComponent } from './payment-gateway-integration/payment-gateway-integration.component';
import { RefundHandlingComponent } from './refund-handling/refund-handling.component';



@NgModule({
  declarations: [
    PaymentProcessComponent,
    PaymentGatewayIntegrationComponent,
    RefundHandlingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModuleModule { }
