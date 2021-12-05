import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../../../shared/models/IProduct';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Input() showDetails: boolean;
  @Input() cartView: boolean;


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  private get productImage(): string {
    return this.product.imageName ? `/assets/images/${this.product.imageName}` : '/assets/images/unavailable.jpg';
  }

  private get productImageAlt(): string {
    return `Image of product ${this.product.name}`;
  }

  public increaseProductCounter() {
    this.product.count ? this.product.count++ : this.product.count = 1;
  }

  public goToDetails() {
    this.router.navigateByUrl('product-details', {state: this.product});
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
