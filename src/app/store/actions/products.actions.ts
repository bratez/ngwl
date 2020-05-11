import { ProductsState } from './../state/products.state';
import { Product } from './../../interfaces/product';
import { Action } from '@ngrx/store';

export enum EProductsActions {
  GetProducts = 'Get Products',
  GetProductsSuccess = 'Get Products Success',

  FilterProducts = 'Filter Products',
  FilterProductsSuccess = 'Filter Products Success',

  SortProducts = 'Sort Products',
  SortProductsSuccess = 'Sort Products Success',

  DirectSorting = 'Direct Sorting',
  DirectSortingSuccess = 'Direct Sorting Success',

  WishlistToggle = 'Toggle In Wishlist',
  WishlistToggleSuccess = 'Toggle In Wishlist Success'
}

export class GetProducts implements Action {
  public readonly type = EProductsActions.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = EProductsActions.GetProductsSuccess;
  constructor ( public payload: ProductsState ) {}
}

export class FilterProducts implements Action {
  public readonly type = EProductsActions.FilterProducts;
  constructor ( public payload: string ) {}
}

export class FilterProductsSuccess implements Action {
  public readonly type = EProductsActions.FilterProductsSuccess;
  constructor ( public payload: ProductsState ) {}
}

export class SortProducts implements Action {
  public readonly type = EProductsActions.SortProducts;
  constructor ( public payload: string ) {}
}

export class SortProductsSuccess implements Action {
  public readonly type = EProductsActions.SortProductsSuccess;
  constructor ( public payload: ProductsState ) {}
}

export class DirectSorting implements Action {
  public readonly type = EProductsActions.DirectSorting;
  constructor ( public payload: boolean ) {}
}

export class DirectSortingSuccess implements Action {
  public readonly type = EProductsActions.DirectSortingSuccess;
  constructor ( public payload: ProductsState ) {}
}

export class WishlistToggle implements Action {
  public readonly type = EProductsActions.WishlistToggle;
  constructor ( public payload: number ) {}
}

export class WishlistToggleSuccess implements Action {
  public readonly type = EProductsActions.WishlistToggleSuccess;
  constructor ( public payload: Product[] ) {}
}

export type ProductsActions =
GetProducts |
GetProductsSuccess |

FilterProducts |
FilterProductsSuccess |

SortProducts |
SortProductsSuccess |

DirectSorting |
DirectSortingSuccess |

WishlistToggle |
WishlistToggleSuccess;
