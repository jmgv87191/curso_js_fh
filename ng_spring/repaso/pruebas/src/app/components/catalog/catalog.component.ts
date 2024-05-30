import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ ProductCardComponent ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  @Input() listaProductos:Product[] = []
  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter


  addProduct( product: Product ){
    this.productEventEmitter.emit(product)
  }

}
