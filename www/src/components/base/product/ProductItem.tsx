import React from 'react'
import style from './ProductItem.module.scss'
import { Product } from 'types'

interface Props {
   product: Product
}
const ProductItem = ({ product }: Props) => {
   return (
      <li className={style.mainCard__container}>
         <img src={product.images[0]}></img>
         <p>{product.name}</p>
         <p>{product.priceNow}</p>
      </li>
   )
}

export default ProductItem
export { ProductItem }
