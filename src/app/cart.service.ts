import { Injectable } from '@angular/core';
import { IProductCart } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  /** ATTRIBUTE **/
  items: IProductCart[] = [];

  /** CONSTRUCTOR **/
  constructor() { }

  /** METHODS **/
  getCart() {
    this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.items;
  }

  addToCart(product: IProductCart) {
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  removeFromCart(productId: number) {
    this.items = this.items.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  cleanCart() {
    this.items = [];
    localStorage.clear();
  }
}
