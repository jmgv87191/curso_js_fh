import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() item!:Product;
  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter


  addProduct( product: Product ){
    this.productEventEmitter.emit(product)
  }

}
