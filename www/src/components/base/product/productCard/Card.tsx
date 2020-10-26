import React from 'react'
import { Img, Select } from 'components/common'
import {
   Actions,
   Badget,
   Btn,
   Caption,
   General,
   Price,
   Product,
} from './styles'

const Card = ({ className, ...product }: any) => {
   const discount =
      ((product.priceBefore - product.priceNow) * 100) / product.priceBefore
   return (
      <Product>
         <Img src={product.images[0]} alt={product.name} />
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
            <Btn>Añadir</Btn>
         </Actions>
      </Product>
   )
}
export default Card
export { Card }
