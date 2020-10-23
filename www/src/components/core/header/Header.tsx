import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai'
import { RiUser3Line } from 'react-icons/ri'
import Logo from '../../base/logo/Logo'
import logoSrc from '../../../assets/images/logo.png'
import parteSrc from '../../../assets/images/parte.png'
import { Header as Wrap, Inline } from './styles'

export default function Header() {
   return (
      <Wrap>
         <Inline gap="0">
            <img className="veepe" src={parteSrc} />
            <Logo src={logoSrc} link="/" width="60px" />
         </Inline>
         <Inline>
            <AiOutlineShopping size="24" />
            <RiUser3Line size="24" />
         </Inline>
      </Wrap>
   )
}

export { Header }