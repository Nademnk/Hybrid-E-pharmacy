import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { SystemConfigurationComponent } from './system-configuration/system-configuration.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';

const routes: Routes = [
  
    
      { path: 'user-management', component: UserManagementComponent },
      { path: 'product-management', component: ProductManagementComponent }
      // Add more admin routes
    ];
   
  


@NgModule({
  declarations: [
    UserManagementComponent,
    ProductManagementComponent,
    OrderManagementComponent,
    SystemConfigurationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  AdminRoutingModule
  ]
})
export class AdminModuleModule { }
