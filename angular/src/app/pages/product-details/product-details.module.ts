import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import {ProductsModule} from '../home/components/products/products.module';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
    imports: [
        CommonModule,
        ProductsModule
    ]
})
export class ProductDetailsModule { }
