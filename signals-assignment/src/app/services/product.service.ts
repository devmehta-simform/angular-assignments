import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../types/product';
import crypto from 'crypto';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([]);

  constructor() {}

  createProduct(product: Omit<Product, 'id'>) {
    const id = crypto.randomInt(10000000000);
    return computed<Product[]>(() => [...this.products(), { ...product, id }]);
  }

  getAllProducts() {
    return this.products.asReadonly();
  }

  getProductById(id: number) {
    return this.products().find((p) => p.id === id);
  }
}
