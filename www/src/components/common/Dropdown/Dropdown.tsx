import React, { useState } from 'react'
import styled from 'styled-components'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const Dropdown = ({ name, labels }: any) => {
   const [open, setState] = useState(false)
   const toggleDropdown = (e: React.SyntheticEvent) => {
      setState((state) => !state)
   }
   return (
      <Wrap>
         <p className="category">{name}</p>
         <Icon open={open} onClick={toggleDropdown} />
         {open && (
            <ul>
               {labels.map((label: any) => (
                  <li key={label.name}>{label}</li>
               ))}
            </ul>
         )}
      </Wrap>
   )
}
const Icon = styled('div').attrs((props: any) => ({
   children: props.open ? <FaAngleUp /> : <FaAngleDown />,
}))`
   position: absolute;
   top: 5px;
   right: -5px;
   cursor: pointer;
`
const Wrap = styled('div')`
   position: relative;
   padding-bottom: 12px;
   text-transform: capitalize;
   ul {
      margin-top: 12px;
      padding-left: 1rem;
   }
   border-bottom: 1px solid gray;
`
export default Dropdown
export { Dropdown }
