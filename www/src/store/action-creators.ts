import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './reducer'
import { ActionCreator } from '../types/store'

/* Action Creators*/
export const addProductToCart: ActionCreator = (id: string) => ({
   type: ADD_PRODUCT_TO_CART,
   payload: id,
})
export const removeProductFromCart: ActionCreator = (id: string) => ({
   type: REMOVE_PRODUCT_FROM_CART,
   payload: id,
})
