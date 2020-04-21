import { Product } from './../../interfaces/product';

export interface WishlistState {
  wishlist: Product[]
}

export const initialWishlistState: WishlistState = {
  wishlist: null
}
