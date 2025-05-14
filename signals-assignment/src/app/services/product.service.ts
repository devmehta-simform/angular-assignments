import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Wireless Earbuds',
      price: 99.99,
      discount: 10, // 10% discount
      description: 'High-quality wireless earbuds with noise cancellation.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 2,
      name: 'Smartphone 12 Pro',
      price: 799.99,
      discount: 15, // 15% discount
      description:
        'The latest smartphone with cutting-edge features and camera.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 3,
      name: '4K Ultra HD TV',
      price: 499.99,
      discount: 20, // 20% discount
      description:
        'A large 4K Ultra HD smart TV for the ultimate viewing experience.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 199.99,
      discount: 5, // 5% discount
      description:
        'A stylish smart watch to track your fitness and notifications.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 5,
      name: 'Laptop 15" Pro',
      price: 1299.99,
      discount: 10, // 10% discount
      description:
        'A powerful laptop with a 15-inch screen and high performance.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      price: 59.99,
      discount: 30, // 30% discount
      description:
        'Portable Bluetooth speaker with rich sound and long battery life.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 7,
      name: 'Gaming Headset',
      price: 89.99,
      discount: 25, // 25% discount
      description:
        'Comfortable gaming headset with surround sound and microphone.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 8,
      name: 'Portable Power Bank',
      price: 29.99,
      discount: 10, // 10% discount
      description: 'Portable power bank to charge your devices on the go.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 9,
      name: 'Smart Home Assistant',
      price: 149.99,
      discount: 12, // 12% discount
      description: 'Voice-controlled smart assistant for your home.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
    {
      id: 10,
      name: 'Digital Camera',
      price: 399.99,
      discount: 18, // 18% discount
      description: 'High-resolution digital camera with 4K video recording.',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYumxH7lya9c2nPY3E3y8t9-GbbcmZGnQeQ&s',
    },
  ]);

  constructor() {}

  createProduct(product: Omit<Product, 'id'>) {
    const id = Math.round(Math.random() * 1000000);
    return computed<Product[]>(() => [...this.products(), { ...product, id }]);
  }

  getAllProducts() {
    return this.products.asReadonly();
  }

  getProductById(id: number) {
    return this.products().find((p) => p.id === id);
  }
}
