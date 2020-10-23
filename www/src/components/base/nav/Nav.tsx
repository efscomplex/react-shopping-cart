import React from 'react'
import styled from 'styled-components'
import { Route } from '../../../types/route'
import { NavLink } from 'react-router-dom'
import { Link } from '../../common'

interface Props {
   className?: string
   routes: Route[]
   activeClass?: string
   router?: boolean
   handleClick?: (e: React.SyntheticEvent) => void
   [props: string]: any
}

const getLink = (router: boolean) => (router ? NavLink : Link)

const Nav = ({
   routes = [],
   className,
   handleClick,
   router = false,
   activeClassName = 'active',
   ...props
}: Props) => {
   const [active, setActive] = React.useState(routes[0].label)
   const Link = getLink(router)
   const onClick = (event: any) => {
      setActive(event.target.getAttribute('id'))
      handleClick && handleClick(event)
   }
   const linkProps = (route: Route) =>
      router
         ? { exact: true, to: route.path, activeClassName: activeClassName }
         : {
              handle: onClick,
              activeClassName: activeClassName,
           }
   const customLink = (route: any) => {
      const id = route.label
      return (
         <Link key={id} id={id} active={active  ===  id} {...linkProps(route)}>
            {route.label}
         </Link>
      )
   }
   return (
      <nav className={className}>
         {routes.map(customLink)}
         {props.children}
      </nav>
   )
}

const Wrap = styled(Nav).attrs((props: any) => ({
   column: props.$column ? 'column' : null,
}))`
   position: relative;
   width: 100%;
   height: ${(props: Props) => props.height};
   display: flex;
   align-items: ${(props: Props) => props.align};
   flex-direction: ${(props: Props) => props.column};
   gap: ${(props: Props) => props.gap};
   .active{
      border-bottom: 1px solid gray;
   }
   a {
      padding: ${(props: Props) => props.pd || '12px 16px'};
      text-transform: capitalize;
   }
`

export default Wrap
export { Wrap as Nav }
