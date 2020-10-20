import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { ProductDetail } from '../../components/base'
import { Img, Map } from '../../components/common'
import { products } from '../../store'
import { breaks } from '../../config'

const Product = ({ images, name }: any) => (
   <div>
      <Img src={images[0]} alt={name} />
      <p>{name}</p>
   </div>
)
export default function ({ children, ...props }: any) {
   return (
      <Main {...props}>
         <Map as={ProductWrap} from={products} template={Product} />
         <Switch>
            <Route path="/:productId" component={ProductDetail} />
         </Switch>
      </Main>
   )
}
const ProductWrap = styled('div')`
   display: grid;
   grid-template-columns: repeat(3, 200px);
   grid-gap: 1rem;
   
   @media (max-width: ${breaks.get('medium')}) {
      grid-template-columns: repeat(2, 1fr);
   }
`

const Main = styled('main')``
