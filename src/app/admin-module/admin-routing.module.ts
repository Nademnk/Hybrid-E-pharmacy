import { RouterModule, Routes } from "@angular/router";
import { UserManagementComponent } from "./user-management/user-management.component";
import { ProductManagementComponent } from "./product-management/product-management.component";
import { NgModule } from "@angular/core";
import { OrderManagementComponent } from "./order-management/order-management.component";
import { SystemConfigurationComponent } from "./system-configuration/system-configuration.component";



const routes: Routes = [


  { path: 'user-management', component: UserManagementComponent },
  { path: 'product-management', component: ProductManagementComponent },
  { path: 'order-management', component: OrderManagementComponent },
  { path: 'system-configuration', component: SystemConfigurationComponent }
  // Add more admin routes
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }