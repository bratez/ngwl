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

  AddingToWishlist = 'Adding To Wishlist',
  AddingToWishlistSuccess = 'Adding To Wishlist Success',

  RemovingFromWishlist = 'Removing From Wishlist',
  RemovingFromWishlistSuccess = 'Adding From Wishlist Success'
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
}

export class SortProductsSuccess implements Action {
  public readonly type = EProductsActions.SortProductsSuccess;
  constructor ( public payload: Product[] ) {}
}

export class DirectSorting implements Action {
  public readonly type = EProductsActions.DirectSorting;
}

export class DirectSortingSuccess implements Action {
  public readonly type = EProductsActions.DirectSortingSuccess;
  constructor ( public payload: Product[] ) {}
}

export class AddingToWishlist implements Action {
  public readonly type = EProductsActions.AddingToWishlist;
}

export class AddingToWishlistSuccess implements Action {
  public readonly type = EProductsActions.AddingToWishlistSuccess;
  constructor ( public payload: Product[] ) {}
}

export class RemovingFromWishlist implements Action {
  public readonly type = EProductsActions.RemovingFromWishlist;
}

export class RemovingFromWishlistSuccess implements Action {
  public readonly type = EProductsActions.RemovingFromWishlistSuccess;
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

AddingToWishlist |
AddingToWishlistSuccess |

RemovingFromWishlist |
RemovingFromWishlistSuccess;
