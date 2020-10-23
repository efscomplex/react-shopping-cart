import Header from '../components/core/header/Header'
import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch as Lupe } from 'react-icons/ai'

import { breaks, routes, theme } from '../config'
import { Container } from '../components/common'
import Main from './main/Main'
import { Aside, Navbar, Search } from '../components/core'
import useSelector from '../hooks/useSelector'
import { getFilteredProducts } from '../store/selectors'

function App({ className }: any) {
   const filteredProducts = useSelector(getFilteredProducts)
   return (
      <Container className={className} break="large">
         <Header />
         <Navbar routes={routes} />
         <Search
            label={<Lupe size="22" />}
            theme={theme}
            placeholder="busca por prenda o categoria en catálogo"
         />
         <Aside />
         <Main filteredProducts={filteredProducts} />
      </Container>
   )
}

export default styled(App)`
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   padding: 1rem;
   display: grid;
   grid-template-areas: 'header header' 'navbar navbar' 'search search' 'aside main';
   grid-template-columns: 20ch 1fr;
   grid-gap: 1rem 3rem;
   ${Search} {
      grid-area: search;
      margin: 1rem 0 2rem auto;
      border-radius: 2px;
      @media (max-width: ${breaks.get('medium')}) {
         width: 100%;
      }
   }
`
