import React from 'react'
import styled from 'styled-components'

export default function Input({ children }: any) {
   const onChangeQuantity = ({ target }: any) => {
      children(target.value)
   }
   return (
      <Wrap
         type="number"
         min={0}
         max={10}
         onChange={onChangeQuantity}
         placeholder="quantity"
      />
   )
}
const Wrap = styled('input')`
   padding: 0.4rem 1rem;
`
