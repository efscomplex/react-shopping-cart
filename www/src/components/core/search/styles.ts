import styled, { css } from 'styled-components/macro'
import { cssMargin } from '../../../helpers/mixins/margin'
import { Props } from './propTypes'

export const Label = styled('label')`
   ${cssMargin}
   width: ${(props: any) => props.$expand ? '100%': 'max-content'};
   
   display: flex;
   align-items: flex-end;

   line-height: 1em;
   cursor: pointer;
   
   span{
      text-transform: capitalize;
      margin-right: 12px;
   }
`
const cssFancyInput = css `
   border: none;
   padding:0 0 1px 0;
   border-bottom: 1px solid gray;
   background-color: transparent;
   color: inherit;
`
export const StyInput = styled('input') `
   width: 100%;
   padding: 12px;
   
   ${(props: Props) => props.fancy && cssFancyInput}
   ${(props: Props) => props.theme && `
      background-color: ${ props.theme.bg };
      color: ${ props.theme.fg };
      border: 1px solid ${ props.theme.fg };
   `}
   border-radius: 6px;
`