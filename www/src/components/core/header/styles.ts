import { breaks } from '../../../config'
import styled from 'styled-components'

export const Inline = styled('div')`
   display: flex;
   align-items: center;
   gap: 12px;
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
   .logo {
      width: 13ch;
   }
   .veepe {
      width: 10ch;
      transform: translateY(-7px);
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
