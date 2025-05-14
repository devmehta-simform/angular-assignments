import { Component, OnInit, Signal } from '@angular/core';
import { Product } from '../../types/product';
import { ProductService } from '../../services/product.service';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products!: Signal<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }
}
