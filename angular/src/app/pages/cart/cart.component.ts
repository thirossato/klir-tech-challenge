import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../shared/models/IProduct';
import {PromotionHelper} from '../../shared/components/helpers/promotion-helper';
import {PromotionEnum} from '../../shared/enums/promotion-enum';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartProducts: IProduct[] = [];

  constructor() {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('cart')) {
      this.cartProducts = JSON.parse(sessionStorage.getItem('cart')) as IProduct[];
    }
  }

  public totalProduct(product: IProduct) {
    if (!product.total) {
      this.updateProductTotal(product);
    }
    return product.total;
  }

  public get total() {
    return this.cartProducts.map(p => p.total).reduce((a, b) => a + b);
  }

  public refreshCart() {
    this.cartProducts = JSON.parse(sessionStorage.getItem('cart')) as IProduct[];
  }

  private updateProductTotal(product) {
    if (product.promotion) {
      const promotion = product.promotion;
      if (promotion.minimalQuantity <= product.count) {
        const promoHelper = new PromotionHelper();
        if (product.promotion.id === PromotionEnum.GET_ONE_FREE) {
          product.total = promoHelper.getOneFree(product);
        }
        if (product.promotion.id === PromotionEnum.THREE_FOR_TEN) {
          product.total = promoHelper.getThreeForTen(product);
        }
      } else {
        product.total = product.price * product.count;
      }
    } else {
      product.total = product.price * product.count;
    }
  }
}
