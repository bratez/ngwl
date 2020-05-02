import { Category } from './../../interfaces/category';
import { Product } from './../../interfaces/product';

export interface ProductsState {
  products: Product[],
  categories: Category[]
}

export const initialProductsState: ProductsState = {
  products: null,
  categories: null
}
