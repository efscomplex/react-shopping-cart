import { Action, ActionType } from '../types/store'
import { Product } from '../types/product'
/* Action Types*/
export const ADD_PRODUCT_TO_CART: ActionType = 'cartProducts/add/id'
export const REMOVE_PRODUCT_FROM_CART: ActionType = 'cartProducts/remove/id'
export const FILTER_PRODUCTS: ActionType = 'filteredProducts'

export default (state: any, action: Action) => {
   let cartProducts: Product[]
   let filteredProducts = state.filteredProducts
   
   switch (action.type) {
      case FILTER_PRODUCTS:
         filteredProducts = state.products.filter(action.payload)
         return { ...state, filteredProducts }
      case ADD_PRODUCT_TO_CART:
         cartProducts = state.cartProducts.push(
            (product: Product) => product.id === action.payload.id
         )
         return { ...state, cartProducts }
      case REMOVE_PRODUCT_FROM_CART:
         cartProducts = state.cartProducts.filter(
            (prod: Product) => prod.id !== action.payload.id
         )
         return { ...state, cartProducts }
      default:
         return state
   }
}
