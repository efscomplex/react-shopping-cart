import React from 'react'
import { useMutation } from '@apollo/client'
import { ADD_PRODUCT_TO_CART } from 'operations'
import { Img, Select } from 'components/common'
import { useHistory } from 'react-router-dom'
import {
   Actions,
   Badget,
   Btn,
   Caption,
   General,
   Price,
   Product,
} from '../styled'

const Card = ({ className, ...product }: any) => {
   const [addToCart] = useMutation(ADD_PRODUCT_TO_CART)
   const discount =
      ((product.priceBefore - product.priceNow) * 100) / product.priceBefore
   const history = useHistory()
   const onClickDetails = () => {
      history.push(`/${product.id}`)
   }
   const onClickAddToCart = () => {
      const productId = product.id
      addToCart({ variables: { productId } })
   }
   return (
      <Product>
         <Img
            src={product?.images[0]}
            alt={product?.name}
            onClick={onClickDetails}
         />
         <General>
            <Caption>
               <strong>{product.branch}</strong>
               <p>{product.name}</p>
            </Caption>
            <Price>
               <Badget>-{discount.toFixed()}%</Badget>
               <div className="before euro">{product.priceBefore}</div>
               <h3 className="after euro">{product.priceNow}</h3>
            </Price>
         </General>
         <Actions>
            <Select options={product.size} label="Talla" />
            <Btn onClick={onClickAddToCart}>Añadir</Btn>
         </Actions>
      </Product>
   )
}
export default Card
export { Card }
