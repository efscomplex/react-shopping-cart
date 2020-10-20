import { css } from 'styled-components'

const cssSize = css `
   width: ${(props: any)=> props.size || props.width};
   height: ${(props: any)=> (props.size && `calc(${props.size} * ${props.ratio || 1})`) || props.height};
   max-width: ${(props: any)=> props.maxw || props.maxWidth || props.maxW};
   min-width: ${(props: any)=> props.minw || props.minWidth || props.minW};
   max-height: ${(props: any)=> props.maxh || props.maxHeight || props.maxH};
   min-height: ${(props: any)=> props.minH|| props.minHeight || props.minH};
`

export default cssSize
export { cssSize }