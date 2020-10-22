import React, { useState } from 'react'
import styled from 'styled-components'
import { HiMenuAlt2 } from 'react-icons/hi'

import { breaks } from '../../../config'

import Nav from '../../base/nav/Nav'

const Hamburger = styled(HiMenuAlt2)``

function Navbar({ routes }: any) {
   //const handleClick = () => alert('hello gemma!!')
   const toggleShowMenu = () => setShowMenu((state) => !state)
   const [showMenu, setShowMenu] = useState(false)

   return (
      <Wrap menu={showMenu}>
         <Hamburger onClick={toggleShowMenu} />
         <Nav routes={routes} handleClick={()  =>  {}} />
      </Wrap>
   )
}
const Wrap = styled('div')`
   grid-area: navbar;
   justify-self: flex-start;
   display: flex;
   gap: 1rem;
   ${Hamburger} {
      display: none;
   }
   ${Nav} {
      font-weight: bold;
   }
   @media (max-width: ${breaks.get('medium')}) {
      width: 100%;
      ${Hamburger} {
         display: block;
      }
      ${Nav} {
         flex-direction: column;
         display: ${(props: any) => (props.menu ? 'none' : 'flex')};
      }
   }
   .hidden {
      overflow: hidden;
      max-height: 0;
   }
`
export default Navbar
export { Navbar }
