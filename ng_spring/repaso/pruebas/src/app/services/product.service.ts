import { Injectable } from '@angular/core';
import { products } from '../db/products.data'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    return products;
  }


}
