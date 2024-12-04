import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RemoveFromCartComponent } from './remove-from-cart/remove-from-cart.component';
import { UpdateQuantitiesComponent } from './update-quantities/update-quantities.component';



@NgModule({
  declarations: [
    AddToCartComponent,
    RemoveFromCartComponent,
    UpdateQuantitiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModuleModule { }
