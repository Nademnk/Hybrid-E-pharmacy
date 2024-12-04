import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReportsComponent } from './sales-reports/sales-reports.component';
import { UserBehaviorTrackingComponent } from './user-behavior-tracking/user-behavior-tracking.component';
import { PerformanceMetricsComponent } from './performance-metrics/performance-metrics.component';



@NgModule({
  declarations: [
    SalesReportsComponent,
    UserBehaviorTrackingComponent,
    PerformanceMetricsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AnalyticsModuleModule { }
