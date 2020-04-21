import { Product } from './../../interfaces/product';

export interface ProductsState {
  products: Product[]
}

export const initialProductsState: ProductsState = {
  products: null
}
