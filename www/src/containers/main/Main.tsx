import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { ProductDetail } from '../../components/base'
import { Img, Map } from '../../components/common'
import useSelector from '../../hooks/useSelector'
import { getCategories } from 'store/selectors'

const Product = ({ image, name }: any) => (
   <div className='product'>
      <Img src={image} alt={name} />
      <Branch>{name}</Branch>
   </div>
)
const Branch = styled('h4')`
   position: absolute;
   top: 4px;
   left: 4px;
   background-color: rgba(0, 0, 0, 0.6);
   color: white;
   padding: 4px 12px;
   border-radius: 9px;
`
export default function ({ children, ...props }: any) {
   const products = useSelector(getCategories)
   
   return (
      <Main {...props}>
         <Switch>
            <Route exact path='/'>
               <Map as={ProductWrap} from={products} template={Product} />
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
   img {     
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
   }
`

const Main = styled('main')``
