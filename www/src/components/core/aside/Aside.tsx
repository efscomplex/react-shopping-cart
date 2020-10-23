import React from 'react'
import styled from 'styled-components'

import useSelector from '../../../hooks/useSelector'
import { getCategories } from '../../../store/selectors'
import { Map, Dropdown } from '../../common'

function Aside({ ...props }: any) {
   const categories = useSelector(getCategories)
   return (
      <Wrap {...props}>
         <Map from={categories} template={Dropdown} />
      </Wrap>
   )
}
const Wrap = styled('aside')`
   grid-area: aside;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   
`
export default Aside
export { Aside }
