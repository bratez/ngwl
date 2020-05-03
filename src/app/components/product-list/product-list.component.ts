import { Observable } from 'rxjs';
import { Product } from './../../interfaces/product';
import { selectProductsList, selectCategoriesList } from './../../store/selectors/products.selectors';
import { IAppState } from './../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { GetProducts, FilterProducts, SortProducts, WishlistToggle } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  pageName = 'Products list';

  products$: Observable<Product[]>;
  categories$: Observable<Category[]>;

  constructor(private router: Router, private _store : Store<IAppState>) {}

  ngOnInit(): void {
    this.products$ = this._store.pipe(select(selectProductsList));
    this.categories$ = this._store.pipe(select(selectCategoriesList));
    this._store.dispatch(new GetProducts());
  }

  onCategory(event) {
    this._store.dispatch(new FilterProducts(event));
  }

  onChangeDirection(event) {
    console.log(event)
  }

  onSorting(param) {
    this._store.dispatch(new SortProducts(param));
  }

  toWishlist(id) {
    this._store.dispatch(new WishlistToggle(id));
  }

  toProduct(id) {
    this.router.navigate([`/products/${id}`]);
  }

  wishlist() {
    this.router.navigate([`/wishlist/`]);
  }

}
