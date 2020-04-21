import { ProductsActions, EProductsActions } from './../actions/products.actions';
import { initialProductsState, ProductsState } from './../state/products.state';
import { State } from '@ngrx/store';

export const productsReducers = (
  state = initialProductsState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case EProductsActions.GetProductsSuccess:
      return {
        ...state,
        products: action.payload
      }

    case EProductsActions.FilterProductsSuccess:
      return {
        ...state,
        products: action.payload
      }

    case EProductsActions.SortProductsSuccess:
      return {
        ...state,
        products: action.payload
      }

    case EProductsActions.DirectSortingSuccess:
      return {
        ...state,
        products: action.payload
      }

    case EProductsActions.AddingToWishlistSuccess:
      return {
        ...state,
        products: action.payload
      }

    case EProductsActions.RemovingFromWishlistSuccess:
      return {
        ...state,
        products: action.payload
      }

    default:
      return state;
  }
}
