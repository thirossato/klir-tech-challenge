import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../../../shared/models/IProduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;


  constructor() {
  }

  ngOnInit() {
  }

  private get productImage(): string {
    return this.product.imageName ? `/assets/images/${this.product.imageName}` : '/assets/images/unavailable.jpg';
  }

  private get productImageAlt(): string {
    return `Image of product ${this.product.name}`;
  }

  public addToCart(): void {
    if (sessionStorage.getItem('cart')) {
      const cart = JSON.parse(sessionStorage.getItem('cart')) as IProduct[];
      const cartProduct = cart.find(sameProduct => sameProduct.id === this.product.id);
      if (cartProduct) {
        cartProduct.count++;
      } else {
        this.product.count = 1;
        cart.push(this.product);
      }
      sessionStorage.setItem('cart', JSON.stringify(cart));
    } else {
      sessionStorage.setItem('cart', JSON.stringify([this.product]));
    }
  }

}
