import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai'
import { RiUser3Line } from 'react-icons/ri'
import Logo from '../../base/logo/Logo'
import logoSrc from '../../../assets/images/logo.png'
import parteSrc from '../../../assets/images/parte.png'
import { Header as Wrap, Inline } from './styles'
import withBudget from 'HOCs/withBudget'
import { store } from 'store'
import { getCartProducts } from 'store/selectors'

const IShopping = withBudget(AiOutlineShopping)
export default function Header() {
   const productsInCart = getCartProducts(store.getState()).length
   return (
      <Wrap>
         <Inline gap="0">
            <img className="veepe" src={parteSrc} />
            <Logo src={logoSrc} link="/" width="60px" />
         </Inline>
         <Inline>
            <IShopping
               size="24"
               budget={productsInCart !== 0 && productsInCart}
            />
            <RiUser3Line size="24" />
         </Inline>
      </Wrap>
   )
}

export { Header }