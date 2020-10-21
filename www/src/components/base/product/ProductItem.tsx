import React from 'react'
import Proptypes from 'prop-types'
import style from './ProductItem.module.scss'

const ProductItem = ({ product }: any) => {
   return (
      <li className={style.mainCard__container}>
         <img src={product.images[0]}></img>
         <p>{product.name}</p>
         <p>{product.priceNow}</p>
      </li>
   )
}

ProductItem.proptype = {
   product: Proptypes.object.isRequired,
   images: Proptypes.array.isRequired,
   name: Proptypes.string.isRequired,
   priceNow: Proptypes.number.isRequired,
}

export default ProductItem
export { ProductItem }
