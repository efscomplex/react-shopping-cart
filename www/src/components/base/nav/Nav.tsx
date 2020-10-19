import React from 'react'
import styled from 'styled-components'
import { Route } from '../../../types/route'
import { NavLink } from 'react-router-dom'
import Link from '../link/Link'

interface Props {
   className?: string;
   routes: Route[];
   activeClass?: string;
   router?: boolean;
   handleClick?: (e:React.SyntheticEvent) => void
   [props: string]: any;
}

const getLink = (router: boolean) => router
   ? NavLink
   : Link

const Nav = ({routes=[], className, handleClick, router=false, activeClass, ...props}: Props) => {
   const Link = getLink(router)
   const linkProps = (route: Route) => router
      ? {exact: true, to: route.path, activeClassName: activeClass}
      : { handle: handleClick, }
   
   return (
      <nav className={className}>
         {routes.map(route => 
            <Link key={Math.random()*100} {...linkProps(route)}>{route.label}</Link>
         )}
         {props.children}
      </nav>
   )
}

const Wrap = styled(Nav).attrs((props: any) =>({
   column: props.$column ? 'column' : null
}))`
   position: relative;
   height: ${(props: Props) => props.height};
   
   display: flex;
   align-items: ${(props: Props) => props.align};
   flex-direction: ${(props: Props) => props.column};
   gap: ${ (props: Props) => props.gap};
   
   a {
      padding: ${ (props: Props) => props.pd || '12px 16px'};
      text-transform: capitalize;
   }
`

export default Wrap
export { Wrap as Nav}
