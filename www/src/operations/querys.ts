import { gql } from '@apollo/client'

const ProductFragment = gql`
   fragment ProductFields on Product {
      name
      branch
      description
      size
      color
      priceBefore
      priceNow
      images
      id
      categories
      keywords
   }
`
export const GET_CART_PRODUCTS = gql`
   query {
      cartProducts {
         ...ProductFields
      }
   }
   ${ProductFragment}
`
export const GET_PRODUCTS = gql`
   query {
      products {
         ...ProductFields
      }
   }
   ${ProductFragment}
`
export const GET_FILTERED_PRODUCTS = gql`
   query {
      filteredProducts {
         ...ProductFields
      }
   }
   ${ProductFragment}
`
