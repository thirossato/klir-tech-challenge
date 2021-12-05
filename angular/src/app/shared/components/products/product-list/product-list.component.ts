import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from '../../../models/IProduct';
import {ProductsService} from '../../../services/products.service';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];
  private subscriptionDestroyer: Subject<null> = new Subject();

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProductsWithPromotions()
      .pipe(
        takeUntil(this.subscriptionDestroyer),
        filter(products => !!products)
      )
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnDestroy() {
    this.subscriptionDestroyer.next();
    this.subscriptionDestroyer.complete();
  }

}
