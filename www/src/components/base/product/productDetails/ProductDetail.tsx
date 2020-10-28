import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from 'store/selectors'
import { store } from 'store'
import { Img } from 'components/common'
import { Badget, Btn, Caption, DetailsWrap, Price } from '../styled'
import { Oval } from 'components/common/spinners'
import { Inline } from 'components/core/header/styles'
import Input from 'components/common/input/Input'
import { addProductToCart } from 'store/action-creators'

function ProductDetail() {
   const { productId } = useParams()
   const [quantity, setQuantity] = useState(0)
   const product = getProductById(productId)(store.getState())
   const discount =
      ((product.priceBefore - product.priceNow) * 100) / product.priceBefore
   const onClickAddToCart = () => {
      store.dispatch(addProductToCart({ id: product.id, quantity }))
   }

   if (!product) return Oval

   return (
      <DetailsWrap>
         <Img src={product.images[0]} alt={product.name} />
         <Badget>-{discount.toFixed()}%</Badget>
         <div>
            <Caption>
               <strong>{product.branch}</strong>
               <p>{product.name}</p>
            </Caption>
            <Price>
               <div className="before euro">{product.priceBefore}</div>
               <h3 className="after euro">{product.priceNow}</h3>
            </Price>
            <Inline gap="1rem">
               <Input>{setQuantity}</Input>
               <Btn onClick={onClickAddToCart}>Añadir a mi cesta</Btn>
            </Inline>
         </div>
      </DetailsWrap>
   )
}

export default ProductDetail
export { ProductDetail }
