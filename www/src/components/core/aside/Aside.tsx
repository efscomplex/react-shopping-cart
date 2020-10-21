import React from 'react'
import styled from 'styled-components'

export default function({...props}: any) {
   return (
      <Aside {...props}>
         aside
      </Aside>
   )
}
const Aside = styled('aside')`
   grid-area: aside;
`
