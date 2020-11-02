import styled from 'styled-components'

export const Text = styled('span')`
   visibility: hidden;
   width: 120px;
   background-color: black;
   color: #fff;
   text-align: center;
   padding: 5px 0;
   border-radius: 6px;
   position: absolute;
   z-index: 1;
   top: ${(props: any) => props.top && '-10ch'};
   right: ${(props: any) => props.right && '-10ch'};
`
export const Wrap = styled('div')`
   position: relative;
   display: inline-block;
   &:hover {
      ${Text} {
         visibility: visible;
      }
   }
`
