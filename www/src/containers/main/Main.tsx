import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { ProductDetail } from '../../components/base'
import { Map } from '../../components/common'
import { Card as ProductCard } from 'components/base'

export default function ({ children, filteredProducts, ...props }: any) {
   return (
      <Main {...props}>
         <Switch>
            <Route exact path="/">
               <Map
                  as={ProductWrap}
                  from={filteredProducts}
                  template={ProductCard}
               />
            </Route>
            <Route path="/:productId" component={ProductDetail} />
         </Switch>
      </Main>
   )
}
const ProductWrap = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   cursor: pointer;
   .product {
      flex-grow: 1;
      position: relative;
      flex-basis: 300px;
      height: 200px;
   }
`

const Main = styled('main')``
