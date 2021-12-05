import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product/product.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ProductListComponent} from './product-list/product-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ProductDialogComponent} from './product-dialog/product-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductDialogComponent],
  exports: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class ProductsModule {
}
