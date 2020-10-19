import Header from 'components/core/header/Header'
import React from 'react'
import styled from 'styled-components'
import { routes } from '../config'
import { Nav } from '../components/base/nav/Nav'

function App({ className }: any) {
   return (
      <div className={className}>
         <Header/>
         <Nav routes={routes} handleClick={()=>alert('hello gemma!!')}/>
      </div>
   )
}

export default styled(App)`
   
`
