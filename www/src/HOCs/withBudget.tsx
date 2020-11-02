import React from 'react'
import { Budget } from 'components/common'
import styled from 'styled-components'

export default function withBudget(Comp: React.FC) {
   return ({ budget, ...props }: any) => (
      <Wrap>
         <Comp {...props} />
         {budget && <Budget>{budget}</Budget>}
      </Wrap>
   )
}

const Wrap = styled('div')`
   position: relative;
`
