import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { ProductDetail } from 'components/base'
import { Map } from '../../components/common'
import { Card as ProductCard } from 'components/base'
import { useQuery, gql } from '@apollo/client'

const GET_FILTERED_PRODUCTS = gql`
   {
      filteredProducts {
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
   }
`
function Main({ children, ...props }: any) {
   const { error, loading, data={filteredProducts:[]} } = useQuery(
      GET_FILTERED_PRODUCTS
   )
   if (error) <h1>ups!! some error trying to query some data</h1>
   if (loading) <h1>loading!!!</h1>
   
   const {filteredProducts} = data

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
