import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductSearchComponent } from './product-search/product-search.component';



@NgModule({
  declarations: [
    ProductListingComponent,
    ProductDetailsComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModuleModule { }
