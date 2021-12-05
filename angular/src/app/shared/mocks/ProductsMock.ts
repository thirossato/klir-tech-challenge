import {IProduct} from '../models/IProduct';

export const ProductMock = [
  {
    id: 1,
    name: 'Product A',
    price: 20,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel ultrices nisi, sed vehicula purus. Nulla eget quam sed nibh tempus cursus. Quisque mattis imperdiet lorem, sed lacinia diam ultricies at. Curabitur vel sapien placerat, dignissim nibh ac, iaculis quam. Vivamus vehicula massa sit amet imperdiet tincidunt.',
    imageName: 'product-a.jpg',
    promotion: {
      id: 1,
      minimalQuantity: 2,
      name: 'Buy 1 Get 1 Free',
      description: 'Buy 1 Get 1 Free'
    }
  },
  {
    id: 2,
    name: 'Product B',
    price: 4,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel ultrices nisi, sed vehicula purus. Nulla eget quam sed nibh tempus cursus. Quisque mattis imperdiet lorem, sed lacinia diam ultricies at. Curabitur vel sapien placerat, dignissim nibh ac, iaculis quam. Vivamus vehicula massa sit amet imperdiet tincidunt.',
    imageName: 'product-b.jpg',
    promotion: {
      id: 2,
      minimalQuantity: 3,
      name: '3 for 10 Euro',
      description: '3 for 10 Euro'
    }
  },
  {
    id: 3,
    name: 'Product C',
    price: 2,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel ultrices nisi, sed vehicula purus. Nulla eget quam sed nibh tempus cursus. Quisque mattis imperdiet lorem, sed lacinia diam ultricies at. Curabitur vel sapien placerat, dignissim nibh ac, iaculis quam. Vivamus vehicula massa sit amet imperdiet tincidunt.',
    imageName: 'product-c.jpg'
  },
  {
    id: 4,
    name: 'Product D',
    price: 4,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel ultrices nisi, sed vehicula purus. Nulla eget quam sed nibh tempus cursus. Quisque mattis imperdiet lorem, sed lacinia diam ultricies at. Curabitur vel sapien placerat, dignissim nibh ac, iaculis quam. Vivamus vehicula massa sit amet imperdiet tincidunt.',
    imageName: 'product-d.jpg'
  }
] as IProduct[];
