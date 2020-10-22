import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const Dropdown = ({ name, labels, className }: any) => {
   const [open, setState] = useState(false)
   const toggleDropdown = (e: React.SyntheticEvent) => {
      setState((state) => !state)
   }
   return (
      <Wrap className={className}>
         <div>
            <span className="category">{name}</span>
            <Icon open={open} onClick={toggleDropdown} />
         </div>
         <ul className={open ? '' : 'hidden'}>
            {labels.map((label: any, i:   number) => (
               <li key={i}>{label}</li>
            ))}
         </ul>
      </Wrap>
   )
}
const Icon = styled('span').attrs((props: any) => ({
   children: props.open ? <FaAngleUp /> : <FaAngleDown />,
}))`
   float:right;
   cursor: pointer;
`
const Wrap = styled('div')`
   position: relative;
   padding-bottom: 12px;
   text-transform: capitalize;
   .category {
      font-weight: bold;
   }
   ul {
      margin-top: 12px;
      padding-left: 1rem;
      li {
         padding: 7px 0;
      }
   }
   border-bottom: 1px solid rgba(200, 200, 200, 0.7);
   transition: max-height ease-in-out 1s;
   .hidden {
      overflow: hidden;
      max-height: 0;
   }
`
export default Dropdown
export { Dropdown }
