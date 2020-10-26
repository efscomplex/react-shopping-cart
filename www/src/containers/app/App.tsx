import React, { useState } from 'react'
import { AiOutlineSearch as Lupe } from 'react-icons/ai'
import { routes, theme } from 'config'
import Main from '../main/Main'
import { Aside, Navbar, Search, Header } from 'components/core'
import { getFilteredProducts } from 'store/selectors'
import Wrap from './styled'
import { store } from 'store'
import { filterProducts } from 'store/action-creators'
import { Product } from 'types'

function App({ className }: any) {
   const [state, setState] = useState(store.getState())
   store.setter = setState

   const filteredProducts = getFilteredProducts(state)
   const onChangeSearch = ({ target }: any) => {
      const value = target.value
      if (target.value === '') return
      store.dispatch(
         filterProducts((prod: Product) =>
            prod.categories.join(' ').match(value.toLowerCase())
         )
      )
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
         <Main filteredProducts={filteredProducts} />
      </Wrap>
   )
}

export default App
