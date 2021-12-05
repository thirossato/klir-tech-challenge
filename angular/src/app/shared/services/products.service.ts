import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '../models/IProduct';
import {IPromotion} from '../models/ipromotion';
import {Observable, of} from 'rxjs';
import {ProductMock} from '../mocks/ProductsMock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) {
  }

  public getProductsWithPromotions(): Observable<IProduct[]> {
    // const url = "https://api.com/products"
    // return this.httpClient.get(url) as Observable<IProduct>;

    const productsWithPromotions = ProductMock;

    return of(productsWithPromotions);
  }
}
