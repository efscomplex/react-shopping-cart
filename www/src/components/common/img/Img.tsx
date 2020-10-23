import styled from 'styled-components'
import { cssSize } from './cssImg'

interface Props {
   size?: string;
   width?: string;
   [props: string]: any
}
const Img = styled('img').attrs((props:Props)=>({
   ratio: props.ratio || 1
}))`
   max-width: 100%;
   object-fit: cover;
   max-height: 100%;
   object-position: center;
   border-radius: ${(props: any)=> props.radius || '9px'};
   ${cssSize}
`
export default Img
export { Img }