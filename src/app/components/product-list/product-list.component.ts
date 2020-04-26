import { Observable } from 'rxjs';
import { Product } from './../../interfaces/product';
import { selectProductsList } from './../../store/selectors/products.selectors';
import { IAppState } from './../../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { GetProducts } from 'src/app/store/actions/products.actions';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageName = 'Products list';
  products: Product[] = [];
  categories: Category[] = [];

  products$: Observable<Product[]>;

  constructor(private router: Router, private _store : Store<IAppState>) {}

  ngOnInit(): void {
    this.products$ = this._store.pipe(select(selectProductsList));
    this._store.dispatch(new GetProducts());
  }

  onCategory(event) {
    console.log(event)
  }

  onChangeDirection(event) {
    console.log(event)
  }

  onSorting(event) {
    console.log(event)
  }

  toWishlist(id) {
    this.products.forEach(p => {
      if (p.id == id) { p.inWishlist = !p.inWishlist; return }
    })
  }

  toProduct(id) {
    const navData: NavigationExtras = {
      state: {
        product: this.products.filter(p => p.id == id)[0]
      }
    };
    this.router.navigate([`/products/${id}`], navData);
  }

  collectCategories(products): Category[] {
    return Array.from(new Set(products.map((el) => { return el.category } ))).map(el => { return {name: el.toString(), selected: false} });
  }

}
