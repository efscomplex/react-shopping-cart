import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { ProductDetail } from '../../components/base'
import { Img, Map } from '../../components/common'
import useSelector from '../../hooks/useSelector'
import { getCategories } from 'store/selectors'

const Product = ({ image, name }: any) => <Img src={image} alt={name} />

export default function ({ children, ...props }: any) {
   const products = useSelector(getCategories)
   
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
   display: flex;
   flex-wrap: wrap;
   gap: 1rem;
   cursor: pointer;
   & > * {
      flex-grow: 1;
      height: 200px;
      object-fit: cover;
      object-position: center;
      min-width: 300px;
   }
`

const Main = styled('main')``
