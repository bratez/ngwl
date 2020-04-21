import { productsReducers } from './products.reducers';
import { IAppState } from './../state/app.state';
import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from "@ngrx/router-store";

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  products: productsReducers
}
