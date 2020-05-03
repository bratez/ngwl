import { IAppState } from './../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectProductsList } from './../../store/selectors/products.selectors';
import { Product } from './../../interfaces/product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-wishlist',
  templateUrl: './product-wishlist.component.html',
  styleUrls: ['./product-wishlist.component.scss']
})
export class ProductWishlistComponent implements OnInit {
  pageName = "Wishlist";
  products$: Observable<Product[]>;

  constructor(private router: Router, private _store : Store<IAppState>) { }

  ngOnInit(): void {
    this.products$ = this._store.pipe(select(selectProductsList));
  }

  toProduct(id) {
    this.router.navigate([`/products/${id}`]);
  }

}
