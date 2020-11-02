import { InMemoryCache, makeVar } from '@apollo/client'
import { products } from 'store/__mocks__'

export const filteredProducts = makeVar(products)
export const cache = new InMemoryCache({
   typePolicies: {
      Query: {
         fields: {
            filteredProducts: {
               read() {
                  return filteredProducts()
               },
            },
         },
      },
   },
})
