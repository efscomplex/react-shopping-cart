import { Action, ActionType } from '../types/store'
import { Product } from '../types/product'
/* Action Types*/
export const ADD_PRODUCT_TO_CART: ActionType = 'cartProducts/add/id'
export const REMOVE_PRODUCT_FROM_CART: ActionType = 'cartProducts/remove/id'

export default (state: any, action: Action) => {
   let products: Product[]

   switch (action.type) {
      case ADD_PRODUCT_TO_CART:
         products = state.products.push(
            (product: Product) => product.id === action.payload
         )
         return { ...state, products }
      case REMOVE_PRODUCT_FROM_CART:
         products = state.products.filter(
            (prod: Product) => prod.id !== action.payload.id
         )
         return { ...state, products }
      default:
         return state
   }
}
