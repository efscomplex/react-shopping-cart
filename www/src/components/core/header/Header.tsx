import React from 'react'
import { useReactiveVar } from '@apollo/client'
import Logo from 'components/base/logo/Logo'
import { Header as Wrap, Inline } from './styles'
import { AiOutlineShopping } from 'react-icons/ai'
import { RiUser3Line } from 'react-icons/ri'
import logoSrc from 'assets/logo.png'
import parteSrc from 'assets/parte.png'
import withBudget from 'HOCs/withBudget'
import { cartProducts } from 'config/cache'
const IShopping = withBudget(AiOutlineShopping)

export default function Header() {
   const products = useReactiveVar(cartProducts)
   const numOfProductsInCart = products.length || 0
   return (
      <Wrap>
         <Inline gap="0">
            <img className="veepe" src={parteSrc} />
            <Logo src={logoSrc} link="/" width="60px" />
         </Inline>
         <Inline>
            <IShopping
               size="24"
               budget={numOfProductsInCart !== 0 && numOfProductsInCart}
            />
            <RiUser3Line size="24" />
         </Inline>
      </Wrap>
   )
}

export { Header }