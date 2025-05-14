import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../types/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input({ required: true }) item!: Product;
  @Output() remove = new EventEmitter<number>();

  removeItem(id: number) {
    this.remove.emit(id);
  }
}
