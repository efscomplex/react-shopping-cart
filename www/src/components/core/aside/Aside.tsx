import React from 'react'
import styled from 'styled-components'
import { getCategories } from '../../../store/selectors'
import { Map, Dropdown } from '../../common'
import { store } from 'store'
import { filterProducts } from 'store/action-creators'
import { Product } from 'types'
import { Label } from 'types/label'

function Aside({ ...props }: any) {
   const categories = getCategories(store.getState())
   const handleClick = (label: Label) => {
      store.dispatch(
         filterProducts((prod: Product) => prod.categories.includes(label))
      )
   }
   return (
      <div {...props}>
         <Map from={categories} template={Dropdown} handleClick={handleClick} />
      </div>
   )
}
const Wrap = styled(Aside)`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`
export default Wrap
export { Wrap as Aside }
