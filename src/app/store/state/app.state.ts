import { RouterReducerState } from '@ngrx/router-store';
import { ProductState, initialProductState } from './product.state';
import { ProductsState, initialProductsState } from './products.state';
import { WishlistState, initialWishlistState } from './wishlist.state';

export interface IAppState {
  router?: RouterReducerState,
  products: ProductsState
  // product: ProductState,
  // wishlist: WishlistState
}

export const initialAppState: IAppState = {
  products: initialProductsState
  // product: initialProductState,
  // wishlist: initialWishlistState
}
