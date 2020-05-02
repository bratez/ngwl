import { ProductsService } from './../../services/products.service';
import { ProductsActions, EProductsActions } from './../actions/products.actions';
import { initialProductsState, ProductsState } from './../state/products.state';

export const productsReducers = (
  state = initialProductsState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case EProductsActions.GetProductsSuccess:
      return {
        ...state,
        products: action.payload.products,
        categories: action.payload.categories
      }

    case EProductsActions.FilterProductsSuccess:
      return {
        ...state,
        products: action.payload.products,
        categories: action.payload.categories
      }

    case EProductsActions.SortProductsSuccess:
      return {
        ...state,
        products: action.payload.products,
        sortBy: action.payload.sortBy
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
