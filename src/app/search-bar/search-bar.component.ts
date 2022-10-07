import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  /** ATTRIBUTE **/
  description = "";

  /** CONSTRUCTOR **/
  constructor(
    private _router: Router
  ) { }

  /** METHODS **/
  ngOnInit(): void {
  }

  search() {
    if (this.description) {
      this._router.navigate(["products"], { queryParams: { description: this.description }});
      return;
    }

    this._router.navigate(["products"]);
  }
}
