import { Product } from './../types/product'

export const getProducts = (state: any) => state.products
export const getProductById = (id: string) => (state: any) =>
   state.products.find((prod: Product) => prod.id === id)
export const getCartItems = (state: any) => state.cartItems
export const getCategories = (state: any) => state.categories
