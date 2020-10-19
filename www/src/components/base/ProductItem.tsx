import React from 'react'
import Proptypes from 'prop-types'
import './ProductItem.scss'

const ProductItem = ({ product }: any) => {
   return (
      <li className="mainCard__container">
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
