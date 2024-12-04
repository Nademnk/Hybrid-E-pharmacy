import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockManagementComponent } from './stock-management/stock-management.component';
import { InventoryTrackingComponent } from './inventory-tracking/inventory-tracking.component';
import { LowStockAlertComponent } from './low-stock-alert/low-stock-alert.component';



@NgModule({
  declarations: [
    StockManagementComponent,
    InventoryTrackingComponent,
    LowStockAlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InventoryModuleModule { }
