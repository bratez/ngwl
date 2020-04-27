import { Observable } from 'rxjs';
import { Product } from './../../interfaces/product';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit, CanActivate {
  product: Product = null;

  constructor(private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return true;
    // return confirm('Are you sure?');
  }

  ngOnInit(): void {
    // get product dispatch
  }

  onWishlist(event) {
    console.log(event)
  }

}
