import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItems } from '../../interfaces/cartItems';

@Component({
  selector: 'app-cart-app',
  standalone: true,
  imports: [ CatalogComponent, CartComponent ],
  templateUrl: './cart-app.component.html',
  styleUrl: './cart-app.component.css'
})
export class CartAppComponent implements OnInit {

  listaProductos:Product[] = [];
  items: CartItems[] = [];


  constructor( private _productService: ProductService ){}

  ngOnInit(): void {

    this.getProducts()

  }

  getProducts(){
    this.listaProductos =  this._productService.getProducts()
  }

  addProduct( product:Product ){


    const hasItem = this.items.find( item => { return item.product.id === product.id } )

    if (hasItem) {
      this.items = this.items.map(  item =>{
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity +1 }
        }else{
          return item
        }
      } )
      
    } else {
      
      this.items = [ ...this.items, {  quantity:1, product:{ ...product } } ]
    }






  }





}
