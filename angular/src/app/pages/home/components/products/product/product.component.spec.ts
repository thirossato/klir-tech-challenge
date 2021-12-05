import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import {ProductComponent} from './product.component';
import {ProductMock} from '../../../../../shared/mocks/ProductsMock';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [MatIconModule, MatCardModule, MatButtonModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    let store = {};
    const mockSessionStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(sessionStorage, 'getItem')
      .and.callFake(mockSessionStorage.getItem);
    spyOn(sessionStorage, 'setItem')
      .and.callFake(mockSessionStorage.setItem);
    spyOn(sessionStorage, 'removeItem')
      .and.callFake(mockSessionStorage.removeItem);
    spyOn(sessionStorage, 'clear')
      .and.callFake(mockSessionStorage.clear);
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.product = ProductMock[0];
    expect(component).toBeTruthy();
  });

  describe('add to cart', () => {
    it('should set session storage when add first item to cart', fakeAsync(() => {
      component.product = ProductMock[0];
      component.ngOnInit();
      console.log(component.product);
      fixture.detectChanges();
      tick();
      component.addToCart();
      const assertion = {...ProductMock[0], count: 1};
      expect(sessionStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify(assertion));
      expect(sessionStorage.getItem('cart')).toEqual(JSON.stringify(assertion));

    }));
  });
});
