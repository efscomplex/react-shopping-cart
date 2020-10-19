import { Nav } from '../../base/nav/Nav'
import React from 'react'

export default function Header() {
   return (
      <header>
         <Nav routes={[{label: 'home'}, {label: 'about'}]}/>
      </header>
   )
}
