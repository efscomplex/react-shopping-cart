import React from 'react'
import { useReactiveVar } from '@apollo/client'
import styled from 'styled-components'

import { Map } from 'components/common'
import { Card as ProductCard } from 'components/base'
import { filteredProducts } from 'config/cache'

export default function ProductList() {
   const productsFiltered = useReactiveVar(filteredProducts)

   return (
      <ProductWrap>
         <Map from={productsFiltered} template={ProductCard} />
      </ProductWrap>
   )
}

const ProductWrap = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   cursor: pointer;
`
