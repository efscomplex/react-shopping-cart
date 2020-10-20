import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { ProductDetail } from '../../components/base'

export default function({children, ...props}: any) {
   return (
      <Main {...props}>
         <Switch>
            <Route path="/:productId" component={ProductDetail} />
          </Switch>
      </Main>
   )
}

const Main = styled('main')`

`