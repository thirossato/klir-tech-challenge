import {IProduct} from '../../models/IProduct';

export class PromotionHelper {
  public getOneFree(product: IProduct): number {
    if (product.count % 2 === 0) {
      return (product.price * product.count) / 2;
    } else {
      return ((product.price * product.count - 1) / 2) + product.price;
    }
  }

  public getThreeForTen(product: IProduct): number {
    if (product.count % 3 === 0) {
      return (product.count / 3) * 10;
    } else {
      return ((Math.floor(product.count / 3) * 10) + ((product.count % 3) * product.price));
    }
  }
}
