import Header from 'components/core/header/Header'
import React from 'react'
import styled from 'styled-components'
import { routes } from '../config'
import { Nav } from '../components/base/nav/Nav'
import { Container } from '../components/common'

function App({ className }: any) {
   return (
      <Container className={className}>
         <Header/>
         <Nav routes={routes} handleClick={()=>alert('hello gemma!!')}/> 
      </Container>
   )
}

export default styled(App)`
   padding: 1rem;
`
