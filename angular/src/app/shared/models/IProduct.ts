import {IPromotion} from './ipromotion';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  content: string;
  total?: number;
  count?: number;
  imageName?: string;
  promotion?: IPromotion;
}
