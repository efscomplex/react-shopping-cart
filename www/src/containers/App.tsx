import Header from '../components/core/header/Header'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import ProductDetail from '../components/base/ProductDetail'
import '../components/base/ProductItem.module.scss'
import { routes } from '../config'
import { Nav } from '../components/base/nav/Nav'
import { Container } from '../components/common'

function App({ className }: any) {
   return (
      <Container className={className}>
         <Header/>
         <Nav routes={routes} handleClick={()=>alert('hello gemma!!')}/> 
          <Switch>
            <Route path="/:productId" component={ProductDetail} />
          </Switch>
      </Container>
   )
}

export default styled(App)`
   padding: 1rem;
`
