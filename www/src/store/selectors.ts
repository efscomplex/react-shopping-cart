import { Product } from './../types/product'

export const getProducts = (state: any) => state.products
export const getProductById = (id: string) => (state: any) =>
   state.products.find((prod: Product) => prod.id === id)
export const getCartProducts = (state: any) => state.cartProducts
export const getCategories = (state: any) => state.categories
export const getFilteredProducts = (state: any) => state.filteredProducts
