import { breaks } from '../../../config'
import styled from 'styled-components'

export const Inline = styled('div')`
   display: flex;
   align-items: center;
   gap: 12px;
`
export const Header = styled('header')`
   display: flex;
   justify-content: space-between;
   .text {
      font-style: italic;
   }
   .logo{
      width: 15ch;
      @media (min-width: ${breaks.get('small')}){
         width: 20ch;
      }
   }
   .veepe{
      width: 10ch;
      transform: translateY(-7px);
      @media (min-width: ${breaks.get('small')}){
         width: 15ch;
      }
   }
`

