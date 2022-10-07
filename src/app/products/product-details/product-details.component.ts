import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { IProduct, IProductCart } from 'src/app/product';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  /** ATTRIBUTES **/
  product: IProduct | undefined;
  quantity = 1;

  /** CONSTRUCTOR **/
  constructor(
    private _productService: ProductsService,
    private _router: ActivatedRoute,
    private _notificationService: NotificationService,
    private _cartService: CartService
  ) { }

  /** METHODS **/
  ngOnInit(): void {
    const routeParams = this._router.snapshot.paramMap;
    // route params comes as a string or null => convert to Number (0 = not exists)
    const productId = Number(routeParams.get("id"));
    this.product = this._productService.getById(productId);
  }

  addToCart() {
    this._notificationService.notify("The product was added to cart");
    // Setting product info
    const product: IProductCart = {
      ...this.product!,
      quantity: this.quantity
    }
    // Add product to cart
    this._cartService.addToCart(product);
  }

}
