import { Category } from './../../interfaces/category';
import { selectProductsList, selectCategoriesList } from './../selectors/products.selectors';
import { Product } from './../../interfaces/product';
import { ProductsService } from './../../services/products.service';
import { GetProducts, GetProductsSuccess, EProductsActions, FilterProducts, FilterProductsSuccess, SortProducts, SortProductsSuccess, WishlistToggle, WishlistToggleSuccess } from './../actions/products.actions';
import { IAppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  @Effect()
  sortProducts$ = this._actions$.pipe(
    ofType<SortProducts>(EProductsActions.SortProducts),
    withLatestFrom(
      this._store.select(selectProductsList)
    ),
    switchMap(([action, products]: [SortProducts, Product[]]) => {
      const newProducts: Product[] = action.payload ? [...products].sort((a,b) => a[action.payload].localeCompare(b[action.payload])) : products;

      return of(new SortProductsSuccess({ products: newProducts, sortBy: action.payload == '' ? null : action.payload }));
    })
  );


  @Effect()
  getProducts$ = this._actions$.pipe(
    ofType<GetProducts>(EProductsActions.GetProducts),
    switchMap(() => this._productsService.getJSON()),
    switchMap((products: Product[]) => of(new GetProductsSuccess({ products: products, categories: this._productsService.getCategories(products) })))
  );

  @Effect()
  getFilteredProducts$ = this._actions$.pipe(
    ofType<FilterProducts>(EProductsActions.FilterProducts),
    withLatestFrom(
      this._store.select(selectProductsList),
      this._store.select(selectCategoriesList)
    ),
    switchMap(([action, products, categories]: [FilterProducts, Product[], Category[]]) => {
      const newProducts: Product[] = [];
      const newCategories: Category[] = [];
      let filterOff = false;

      Object.keys(categories).map(i => {
        if (categories[i].name == action.payload && categories[i].selected) {
          filterOff = true;
        }
        newCategories.push(
          {
            name: categories[i].name,
            selected: categories[i].name == action.payload ? !categories[i].selected : false
          }
        )
      });

      Object.keys(products).map(i => {
        const newItem = {...products[i]};
        newItem.visible = true;
        if (!filterOff) {
          newItem.visible = newItem.category == action.payload;
        }
        newProducts.push(newItem);
      });

      return of(new FilterProductsSuccess({products: newProducts, categories: newCategories}))
    })
  );

  @Effect()
  wishlistToggle$ = this._actions$.pipe(
    ofType<WishlistToggle>(EProductsActions.WishlistToggle),
    withLatestFrom(
      this._store.select(selectProductsList)
    ),
    switchMap(([action, products]: [WishlistToggle, Product[]]) => {
      const newProducts: Product[] = [];

      Object.keys(products).map(i => {
        const newItem = {...products[i]};

        if (newItem.id == action.payload) {
          newItem.inWishlist = !newItem.inWishlist;
        }
        newProducts.push(newItem);
      });

      return of(new WishlistToggleSuccess(newProducts))
    })
  );

  constructor(
    private _productsService: ProductsService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
