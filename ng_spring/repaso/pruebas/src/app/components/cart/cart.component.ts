import { Component, Input } from '@angular/core';
import { CartItems } from '../../interfaces/cartItems';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input() items: CartItems[] = [];

}
