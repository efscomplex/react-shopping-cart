import React from 'react'
import styled from 'styled-components'
import {Link, Img} from '../../common'

interface Props {
   src: string;
   link?: string;
   children?: any;
   caption?: any;
   [prop: string]: any;
}
const logo = ({ link, children, className, caption, ...props }: Props) => {
	const jsxWrap = link ? (
		<Link href={link}>
			<Img {...props} />
		</Link>
	) : (
		<Img {...props} />
	)

	return (
		<div className={className}>
			{jsxWrap}
			{children || caption}
		</div>
	)
}

const Logo = styled(logo)``

export default Logo
export { Logo }
