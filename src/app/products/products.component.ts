import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  /** ATTRIBUTE **/
  products: IProduct[] | undefined;

  /** CONSTRUCTOR **/
  constructor(
    private _productService: ProductsService,
    private _router: ActivatedRoute
  ) { }

  /** METHOD **/
  ngOnInit(): void {
    const products = this._productService.getAll();
    this._router.queryParamMap.subscribe(params => {
      const description = params.get("description")?.toLowerCase();

      if (description) {
        this.products = products.filter(product => product.description.toLowerCase().includes(description));
        return;
      }

      this.products = products;
    });
  }

}
