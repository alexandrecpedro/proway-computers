import { Injectable } from '@angular/core';
import { IProduct, products } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /** ATTRIBUTE **/
  products: IProduct[] = products;

  /** CONSTRUCTOR **/
  constructor() { }

  /** METHODS **/
  getAll() {
    return this.products;
  }

  getById(productId: number) {
    return this.products.find(product => product.id == productId);
  }
}
