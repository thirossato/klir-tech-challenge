import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from '../../../models/IProduct';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ProductDialogComponent} from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: IProduct;
  @Input() showDetails: boolean;
  @Input() cartView: boolean;
  @Output() cartUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
  }

  private get productImage(): string {
    return this.product.imageName ? `/assets/images/${this.product.imageName}` : '/assets/images/unavailable.jpg';
  }

  private get productImageAlt(): string {
    return `Image of product ${this.product.name}`;
  }

  private get productInCart(): boolean {
    if (this.getCartFromStorage()) {
      const cartProduct = this.getProductFromCart();
      if (cartProduct) {
        return true;
      }
    }
    return false;
  }

  private getCartFromStorage() {
    return JSON.parse(sessionStorage.getItem('cart')) as IProduct[];
  }

  private getProductFromCart() {
    return this.getCartFromStorage().find(sameProduct => sameProduct.id === this.product.id);
  }

  public goToDetails() {
    this.router.navigateByUrl('product-details', {state: this.product});
  }

  public addToCart(): void {
    this.product.count ? this.product.count++ : this.product.count = 1;
    const cart = this.getCartFromStorage();
    if (cart) {
      const cartProduct = this.getProductFromCart();
      if (!cartProduct) {
        cart.push(this.product);
      } else {
        cartProduct.count++;
      }
      sessionStorage.setItem('cart', JSON.stringify(cart));
    } else {
      sessionStorage.setItem('cart', JSON.stringify([this.product]));
    }
  }

  public openCartDialog(event?): void {
    event?.stopPropagation();
    this.addToCart();
    const dialogRef = this.dialog.open(ProductDialogComponent, {data: {...this.product}, width: '900px'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigateByUrl('cart');
      }
    });
  }

  public removeFromCart(): void {
    if (this.getCartFromStorage()) {
      const cart = this.getCartFromStorage();
      const productIndex = cart.findIndex(sameProduct => sameProduct.id === this.product.id);
      if (productIndex >= 0) {
        cart.splice(productIndex, 1);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        this.product.count = 0;
      }
      this.cartUpdated.emit();
    }
  }

  public updateCart(): void {
    if (sessionStorage.getItem('cart')) {
      const cart = JSON.parse(sessionStorage.getItem('cart')) as IProduct[];
      const cartProduct = cart.find(sameProduct => sameProduct.id === this.product.id);
      if (!cartProduct) {
        cart.push(this.product);
      } else {
        cartProduct.count = this.product.count;
      }
      sessionStorage.setItem('cart', JSON.stringify(cart));
    } else {
      sessionStorage.setItem('cart', JSON.stringify([this.product]));
    }
    this.cartUpdated.emit();
  }
}
