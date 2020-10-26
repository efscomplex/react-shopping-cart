import styled from 'styled-components/macro'
import { Props } from './propTypes'

export const Label = styled('label')`
   width: ${(props: Props) => (props.expand ? '100%' : 'max-content')};
   padding: 6px 12px;

   display: flex;
   align-items: center;

   line-height: 1em;
   cursor: pointer;

   ${(props: Props) =>
      props.theme &&
      `
      background-color: ${props.theme.bg};
      color: ${props.theme.color || props.theme.fg};
      border: 1px solid ${props.theme.fg || 'inherit'};
   `}
   span {
      text-transform: capitalize;
      margin-right: 12px;
   }
`

export const StyInput = styled('input')`
   width: 100%;
   background-color: transparent;
   border: none;
   &::placeholder {
   }
`
