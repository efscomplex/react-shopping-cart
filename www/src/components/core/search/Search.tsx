import React from 'react'
import { Label, StyInput } from './styles'

/* NOTE pass the fancy attribute to change the input style */

interface Props {
   [prop: string]: any;
   fancy?: string;
   label?: string;
   $expand?: boolean;
   children?: any;
   mb?: string;
}

function Input({label, ...props}: Props) {
   return (
		<Label {...props}>
			{label && <span>{label}</span>}
         <StyInput {...props}/>
		</Label>
	)
}

export default Input
export { Input }