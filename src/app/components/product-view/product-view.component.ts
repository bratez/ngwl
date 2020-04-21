import { Product } from './../../interfaces/product';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  product: Product = null;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras
        && this.router.getCurrentNavigation().extras.state
        && this.router.getCurrentNavigation().extras.state.product) {
      this.product = this.router.getCurrentNavigation().extras.state.product;
    }
  }

  ngOnInit(): void {
  }

  onWishlist(event) {
    console.log(event)
  }

}
