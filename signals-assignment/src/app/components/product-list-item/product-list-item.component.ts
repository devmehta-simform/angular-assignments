import { Component, Input } from '@angular/core';
import { Product } from '../../types/product';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-list-item',
  imports: [DecimalPipe],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.css',
})
export class ProductListItemComponent {
  @Input({ required: true }) product!: Product;
}
