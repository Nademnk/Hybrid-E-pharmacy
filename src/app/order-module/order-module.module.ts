import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCreationComponent } from './order-creation/order-creation.component';
import { OrderStatusTrackingComponent } from './order-status-tracking/order-status-tracking.component';
import { OrderHistoryComponent } from './order-history/order-history.component';



@NgModule({
  declarations: [
    OrderCreationComponent,
    OrderStatusTrackingComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModuleModule { }
