import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list-item',
  imports: [CurrencyPipe],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  @Input({ required: true }) product!: Product;

  constructor(private cartService: CartService) {}

  handleAddToCart(product: Product) {
    this.cartService.addItemToCart(product);
  }
}
