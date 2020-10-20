import Header from '../components/core/header/Header'
import React from 'react'
import styled from 'styled-components'
import { routes, theme } from '../config'
import { Nav } from '../components/base/nav/Nav'
import { Container } from '../components/common'
import Main from './main/Main'
import Search from '../components/core/search/Search'
import { AiOutlineSearch as Lupe} from 'react-icons/ai' 
import Aside from '../components/core/aside/Aside'

function App({ className }: any) {
   return (
      <Container className={className}>
         <Header/>
         <Nav routes={routes} handleClick={()=>alert('hello gemma!!')}/> 
         <Search label={<Lupe size='22'/>} theme={theme} placeholder='busca por prenda o categoria en catálogo'/>
         <Aside/>
         <Main/>
      </Container>
   )
}

export default styled(App)`
   padding: 1rem;
   display: grid;
   grid-template-areas: "header header" "nav nav" "search search" "aside main";
   grid-template-columns: min-content 1fr;
   grid-gap: 1rem;
   ${Search}{
      grid-area: search;
      margin: 1rem 0 2rem auto;
      border-radius: 2px;
   }
   justify-items: center;
`
