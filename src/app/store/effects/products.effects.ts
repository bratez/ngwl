import { Product } from './../../interfaces/product';
import { ProductsService } from './../../services/products.service';
import { GetProducts, GetProductsSuccess, EProductsActions } from './../actions/products.actions';
import { IAppState } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ProductsEffects {
  @Effect()
  getProducts$ = this._actions$.pipe(
    ofType<GetProducts>(EProductsActions.GetProducts),
    switchMap(() => this._productsService.getJSON()),
    switchMap((products: Product[]) => of(new GetProductsSuccess(products)))
  );

  constructor(
    private _productsService: ProductsService,
    private _actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
