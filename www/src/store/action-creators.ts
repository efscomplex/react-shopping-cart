import {
   ADD_PRODUCT_TO_CART,
   REMOVE_PRODUCT_FROM_CART,
   FILTER_PRODUCTS,
} from './reducer'
import { ActionCreator } from '../types/store'

/* Action Creators*/
export const addProductToCart = ({id, quantity  =  1}: any) => ({
   type: ADD_PRODUCT_TO_CART,
   payload: {
      id,
      quantity
   },
})
export const removeProductFromCart: ActionCreator = (id: string) => ({
   type: REMOVE_PRODUCT_FROM_CART,
   payload: id,
})
export const filterProducts: ActionCreator = (filter: Function) => ({
   type: FILTER_PRODUCTS,
   payload: filter,
})
