import {IPromotion} from './ipromotion';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  content: string;
  imageName?: string;
  promotion?: IPromotion;
}
