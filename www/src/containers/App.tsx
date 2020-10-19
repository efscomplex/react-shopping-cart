import Header from '../components/core/header/Header'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import ProductDetail from '../components/base/ProductDetail'
import '../components/base/ProductItem.module.scss'

function App({ className }: any) {
   return (
      <div className={className}>
         <Header />
         <Switch>
            <Route path="/:productId" component={ProductDetail} />
         </Switch>
      </div>
   )
}

export default styled(App)`
   color: red;
`
