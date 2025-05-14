import { Component, computed, Signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: Signal<Product[]>;
  cartPrice = computed(() =>
    this.cartItems().reduce(
      (acc, i) => acc + i.price - (i.price * i.discount) / 100,
      0
    )
  );
  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getAllCartItems();
  }

  removeItemFromCart(productId: number) {
    this.cartService.removeItemFromCart(productId);
  }
}
