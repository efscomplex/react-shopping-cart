import { InMemoryCache, makeVar } from '@apollo/client'
import { products } from 'store/__mocks__'
import { Product } from 'types'

export const filteredProducts = makeVar(products)
export const cartProducts = makeVar([] as Product[])  
export const cache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            filteredProducts: {
               read() {
                  return filteredProducts()
               },
            },
            cardProducts: {
               read() {
                  return cartProducts()
               },
            },
         },
      },
   },
})
