import useSelector from '../../../hooks/useSelector'
import React from 'react'
import styled from 'styled-components'
import { getCategories } from '../../../store/selectors'
import { Map, Dropdown } from '../../common'

export default function ({ ...props }: any) {
   const categories = useSelector(getCategories)
   return (
      <Aside {...props}>
         <Map from={categories} template={Dropdown} />
      </Aside>
   )
}
const Aside = styled('aside')`
   grid-area: aside;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   align-items: center;
`
