import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai'
import { RiUser3Line } from 'react-icons/ri'
import Logo from '../../base/logo/Logo'
import logoSrc from '../../../assets/images/logo.png'
import veepeSrc from '../../../assets/images/veepe.png'
import { Header, Inline } from './styles'

export default function AppHeader(){

   return (
      <Header>
         <Inline>
            <Logo src={logoSrc} link='/' className='logo'/>
            <span className='text'>parte de</span>
            <img className='veepe' src={veepeSrc} />
         </Inline>
         <Inline>
            <AiOutlineShopping size='24'/>
            <RiUser3Line size='24'/>
         </Inline>
      </Header>
   )
}
