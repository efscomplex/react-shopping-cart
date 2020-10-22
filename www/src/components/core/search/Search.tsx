import React from 'react'
import { Label, StyInput } from './styles'
import { Props } from './propTypes'
import styled from 'styled-components'

/* NOTE pass the fancy attribute to change the input style */

function Input({label, className, theme, children, ...props}: Props) {
   return (
		<Label className={className} theme={theme}>
			{label && <span>{label}</span>}
         <StyInput {...props}/>
		</Label>
	)
}
const Wrap = styled(Input)``

export default Wrap
export { Wrap as Search }