import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../../logic/productActions'
import style from './ProductItem.module.scss'

function ProductDetail(props: any) {
   const params = useParams()
   const [product, setProduct] = useState(
      getProductById(params.productId)
   )
   
   useEffect(() => {
      if (!product) setProduct(getProductById(props.match.params.productId))
   }, [product, params.productId])

   return (
      <>
         {product && (
            <div>
               <img src={product.images[0]} alt={product.name}></img>
               <p className={style.text}>{product.name}</p>
            </div>
         )}
         {!product && <p>Loading...</p>}
      </>
   )
}

export default ProductDetail
export { ProductDetail }
