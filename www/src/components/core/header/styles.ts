import { breaks } from '../../../config'
import styled from 'styled-components'

export const Inline = styled('div')`
   display: flex;
   align-items: flex-end;
   gap: ${(props: any) => props.gap || '12px'};
`
export const Header = styled('header')`
   width: 100%;
   display: flex;
   justify-content: space-between;
   gap: 10px;
   grid-area: header;
   .text {
      font-style: italic;
      white-space: nowrap;
   }
   @media (min-width: ${breaks.get('small')}) {
      .logo {
         width: 20ch;
      }
      .veepe {
         width: 15ch;
      }
   }
`
