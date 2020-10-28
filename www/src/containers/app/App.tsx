import React from 'react'
import { AiOutlineSearch as Lupe } from 'react-icons/ai'
import { routes, theme } from 'config'
import Main from '../main/Main'
import { Aside, Navbar, Search, Header } from 'components/core'
import Wrap from './styled'
import { useMutation } from '@apollo/client'
import { FILTER_BY_LABEL } from 'querys'


function App({ className }: any) {
   const [filterByLabel] = useMutation(FILTER_BY_LABEL)

   const onChangeSearch = ({ target }: any) => {
      const value = target.value
      if (value === '') return
      filterByLabel({ variables: { label: value } })
   }
   return (
      <Wrap className={className} break="1100px">
         <Header />
         <Navbar routes={routes} />
         <div style={{ width: '100%' }}>
            <Search
               onChange={onChangeSearch}
               label={<Lupe size="22" />}
               theme={theme}
               placeholder="busca por prenda o categoria en catálogo"
            />
         </div>
         <Aside />
         <Main />
      </Wrap>
   )
}

export default App
