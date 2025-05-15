import { Component, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  numberOfItemsInCart: Signal<number>;

  constructor(private cartService: CartService) {
    this.numberOfItemsInCart = this.cartService.getNumberOfItemsInCart();
  }
}
