import styled from 'styled-components'

export const Actions = styled('div')`
   display: flex;
   align-items: center;
   gap: 12px;
   & > * {
      width: 50%;
      padding: 7px 1rem;
   }
`
export const General = styled('div')`
   display: flex;
   margin-bottom: 1rem;
   & > * {
      flex-basis: 50%;
   }
`
export const Price = styled('div')`
   text-align: right;
   position: relative;
   .euro {
      &:after {
         content: ' €';
      }
   }
   .before {
      opacity: 0.8;
      color: gray;
      text-decoration: line-through;
   }
`
export const Caption = styled('div')`
   strong {
      display: block;
      margin-bottom: 8px;
   }
   p {
      font-size: 0.8rem;
   }
`
export const Badget = styled('small')`
   position: absolute;
   padding: 4px;
   top: -2rem;
   right: 0px;
   font-weight: bold;
   background-color: #e55253;
   color: white;
`
export const Product = styled('div')`
   min-width: 230px;
   flex-basis: 270px;
   flex-shrink: 1;
   flex-grow: 1;
   img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      margin-bottom: 2rem;
   }
`
export const Btn = styled('button')`
   border: 1px solid black;
   font-weight: bold;
   background-color: transparent;
`
