import { Product } from './../../interfaces/product';

export interface ProductState {
  product: Product
}

export const initialProductState: ProductState = {
  product: null
}
