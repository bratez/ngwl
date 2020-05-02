import { ProductsState } from './../state/products.state';
import { IAppState } from './../state/app.state';
import { createSelector } from '@ngrx/store';

const selectProducts = (state: IAppState) => state.products;

export const selectProductsList = createSelector(
  selectProducts,
  (state: ProductsState) => state.products
);

export const selectCategoriesList = createSelector(
  selectProducts,
  (state: ProductsState) => state.categories
);
