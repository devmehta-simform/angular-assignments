import { Injectable, signal } from '@angular/core';
import { Product } from '../types/product';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = signal<Product[]>([]);
  private numberOfItemsInCart = signal(0);

  constructor(private notificationService: NotificationService) {}

  private updateNumberOfItemsInCart() {
    this.numberOfItemsInCart.set(this.cart().length);
  }

  addItemToCart(product: Product) {
    this.cart.update((oldCart) => [...oldCart, product]);
    this.updateNumberOfItemsInCart();
    this.notificationService.showNotification('cart updated!');
  }

  getAllCartItems() {
    return this.cart.asReadonly();
  }

  getNumberOfItemsInCart() {
    return this.numberOfItemsInCart.asReadonly();
  }

  removeItemFromCart(productId: number) {
    const ind = this.cart().findIndex((i) => i.id === productId);
    if (ind !== -1) {
      const tmpCart = [...this.cart()];
      tmpCart.splice(ind, 1);
      this.cart.set(tmpCart);
      this.updateNumberOfItemsInCart();
      this.notificationService.showNotification('cart updated!');
    }
  }
}
