import React from 'react';
import styled from 'styled-components'

const link = ({href, handle, children, ...props}: any) => {
   const handleClick = (event:React.SyntheticEvent) => {
      event.preventDefault()
      handle && handle(event)
   }
   return (
      <a {...props} href={href} onClick={handleClick}>
         {children}
      </a>
   );
}

const Link = styled(link)`
   white-space: nowrap;
`

export default Link 
export { Link }
