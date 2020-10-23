import React from 'react'
import styled from 'styled-components'

const link = ({
   href,
   handle,
   children,
   className,
   active,
   activeClassName = 'active',
   ...props
}: any) => {
   const handleClick = (event: any) => {
      event.preventDefault()
      handle && handle(event)
   }
   const classes = `${className} ${active ? activeClassName : ''}`
   return (
      <a {...props} href={href} onClick={handleClick} className={classes}>
         {children}
      </a>
   )
}

const Link = styled(link)`
   white-space: nowrap;
`

export default Link
export { Link }
