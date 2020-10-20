import Header from '../components/core/header/Header'
import React from 'react'
import styled from 'styled-components'
import { routes, theme } from '../config'
import { Nav } from '../components/base/nav/Nav'
import { Container } from '../components/common'
import Main from './main/Main'
import Search from '../components/core/search/Search'
import { AiOutlineSearch as Lupe} from 'react-icons/ai' 

function App({ className }: any) {
   return (
      <Container className={className}>
         <Header/>
         <Nav routes={routes} handleClick={()=>alert('hello gemma!!')}/> 
         <Search theme={theme} placeholder='busca por prenda o categoria en catálogo'/>
         <Main/>
      </Container>
   )
}

export default styled(App)`
   padding: 1rem;
   ${Search}{
      &:focus {
         outline: none;
      }
   }
`
