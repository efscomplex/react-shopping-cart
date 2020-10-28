import React from 'react'
import { Wrap, Text } from './styled'

export default function Tooltip({ text, children, ...props }: any) {
   return (
      <Wrap {...props}>
         {children}
         <Text>{text}</Text>
      </Wrap>
   )
}

export { Tooltip }
