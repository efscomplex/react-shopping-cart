import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from 'store/selectors'
import useSelector from '../../../hooks/useSelector'
import style from './ProductItem.module.scss'

function ProductDetail() {
   const { productId } = useParams()
   const product = useSelector(getProductById(productId))

   return product ? (
      <div>
         <img src={product.images[0]} alt={product.name}></img>
         <p className={style.text}>{product.name}</p>
      </div>
   ) : (
      <p>Loading...</p>
   )
}

export default ProductDetail
export { ProductDetail }
