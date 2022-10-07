import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /** ATTRIBUTE **/

  /** CONSTRUCTOR **/
  constructor(
    public cartService: CartService
  ) { }

  /** METHOD **/
  ngOnInit(): void {
  }

}
