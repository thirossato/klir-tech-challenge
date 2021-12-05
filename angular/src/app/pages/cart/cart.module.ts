import {NgModule} from '@angular/core';

import {CartComponent} from './cart.component';
import {ProductsModule} from '../../shared/components/products/products.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductsModule
  ]
})
export class CartModule {
}
