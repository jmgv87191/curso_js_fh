import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {

  ngOnInit(): void {
    console.log(this.itemData)
    console.log( "product desde card", this.itemData)
  }

  @Input() itemData:Product = { name:'', id:0, description:'',price:0 }

}
