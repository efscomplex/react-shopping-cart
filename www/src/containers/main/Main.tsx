import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { ProductDetail } from 'components/base'
import ProductList from 'components/base/product/productList/ProductList'

function Main({ children, ...props }: any) {
   return (
      <div {...props}>
         <Switch>
            <Route exact path="/">
               <ProductList />
            </Route>
            <Route path="/:productId" component={ProductDetail} />
         </Switch>
      </div>
   )
}

const Wrap = styled(Main)``

export default Wrap
export { Wrap as Main }
