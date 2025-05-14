import { Injectable, signal } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  numberOfItemsInCart = signal(0);

  constructor() {}

  addItemToCart(product: Product) {
    this.cart.update((oldCart) => [...oldCart, product]);
    this.numberOfItemsInCart.set(this.cart().length);
    return this.cart.asReadonly();
  }

  getNumberOfItemsInCart() {
    return this.numberOfItemsInCart.asReadonly();
  }
}
