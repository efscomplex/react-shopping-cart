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
export const ADD_PRODUCT_TO_CART = gql`
   mutation addProductToCart($id: ID!) {
      addProductToCart(id: $id) {
         ...ProductFields
      }
   }
   ${ProductFragment}
`
export const FILTER_BY_LABEL = gql`
   mutation filterProductsByLabel($label: String!) {
      filterProductsByLabel(label: $label) {
         ...ProductFields
      }
   }
   ${ProductFragment}
`
