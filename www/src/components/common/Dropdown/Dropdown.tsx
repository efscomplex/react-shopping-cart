import React, { useState } from 'react'
import styled from 'styled-components'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import Link from '../link/Link'

const Dropdown = ({ name, fields, className, handleClick }: any) => {
   const [open, setState] = useState(false)
   const toggleDropdown = (e: React.SyntheticEvent) => {
      setState((state) => !state)
   }
   const onClick = (label: string) => () => {
      handleClick && handleClick(label)
   }
   return (
      <Wrap className={className}>
         <div>
            <span className="category">{name}</span>
            <Icon open={open} onClick={toggleDropdown} />
         </div>
         <ul className={open ? '' : 'hidden'}>
            {fields.map((label: any, i: number) => (
               <Link key={i} handle={onClick(label)}>
                  {label}
               </Link>
            ))}
         </ul>
      </Wrap>
   )
}
const Icon = styled('span').attrs((props: any) => ({
   children: props.open ? <FaAngleUp /> : <FaAngleDown />,
}))`
   margin-left: 12px;
   float: right;
   cursor: pointer;
`
const Wrap = styled('div')`
   position: relative;
   padding-bottom: 0.8rem;
   text-transform: capitalize;
   .category {
      font-weight: bold;
   }
   ul {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      a {
         line-height: 2.5;
      }
   }
   border-bottom: 1px solid rgba(200, 200, 200, 0.7);
   transition: max-height ease-in-out 1s;
   .hidden {
      display: none;
   }
`
export default Dropdown
export { Dropdown }
