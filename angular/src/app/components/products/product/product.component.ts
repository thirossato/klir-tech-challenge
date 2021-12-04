import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;

  private get productImage() {
    return this.product.imageName ? `/assets/images/${this.product.imageName}` : '/assets/images/unavailable.jpg';
  }

  private get productImageAlt() {
    return `Image of product ${this.product.name}`;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
