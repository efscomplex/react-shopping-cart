import React, { useState } from 'react'
import styled from 'styled-components'
import { HiMenuAlt2 } from 'react-icons/hi'
import { breaks } from '../../../config'
import { Nav } from '../../base'
import { useMutation } from '@apollo/client'
import { FILTER_BY_LABEL } from 'operations'
import { filteredProducts } from 'config/cache'

const Hamburger = styled(HiMenuAlt2)``

function Navbar({ routes }: any) {
   const [filterProductsByLabel, { data }] = useMutation(FILTER_BY_LABEL)
   data && filteredProducts(data.filterProductsByLabel)
   
   const handleClick = (e: any) => {
      const label = e.target.getAttribute('id')
      filterProductsByLabel({ variables: { label } })
      toggleShowMenu()
   }
   const toggleShowMenu = () => setShowMenu((state) => !state)
   const [showMenu, setShowMenu] = useState(false)

   return (
      <Wrap menu={showMenu}>
         <Hamburger onClick={toggleShowMenu} />
         <Nav routes={routes} handleClick={handleClick} />
      </Wrap>
   )
}
const Wrap = styled('div')`
   width: 100%;
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
