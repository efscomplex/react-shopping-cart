import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { ProductDetail } from '../../components/base'
import { Map } from '../../components/common'
import { Card as ProductCard } from 'components/base'

function Main({ children, filteredProducts, ...props }: any) {
   return (
      <div {...props}>
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
      </div>
   )
}
const ProductWrap = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   cursor: pointer;
`

const Wrap = styled(Main)``

export default Wrap
export { Wrap as Main }
