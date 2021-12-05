import {Component, Inject, Input, OnInit} from '@angular/core';
import {IProduct} from '../../../models/IProduct';
import {count} from 'rxjs/operators';
import {PromotionEnum} from '../../../enums/promotion-enum';
import {PromotionHelper} from '../../helpers/promotion-helper';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {
  public items: IProduct[];

  constructor(@Inject(MAT_DIALOG_DATA) public product: { product: IProduct }) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('cart')) {
      const cart = JSON.parse(sessionStorage.getItem('cart')) as IProduct[];
      this.items = cart;
    }
  }

  public get subtotal() {
    let total = 0;
    this.items?.forEach(item => {
      if (item.promotion) {
        const promotion = item.promotion;
        if (promotion.minimalQuantity <= item.count) {
          const promoHelper = new PromotionHelper();
          if (item.promotion.id === PromotionEnum.GET_ONE_FREE) {
            item.total = promoHelper.getOneFree(item);
          }
          if (item.promotion.id === PromotionEnum.THREE_FOR_TEN) {
            item.total = promoHelper.getThreeForTen(item);
          }
        }
      }
      total += item.total;
    });
    return total;
  }

  public get numberOfItems() {
    return this.items?.map(item => item.count).reduce((a, b) =>
      a + b
    );
  }

}
