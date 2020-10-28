import styled from 'styled-components'

const Budget = styled('div').attrs((props: any) => ({
   size: props.size || '1.3rem',
}))`
   position: absolute;
   width: ${(props: any) => props.size};
   height: ${(props: any) => props.size};
   font-size: ${(props: any) => `calc(${props.size} * 0.6)`};
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   background-color: ${(props: any) => props.bg || ' #e55253'};
   color: ${(props: any) => props.color || 'white'};
   left: -5px;
   bottom: -5px;
`
export default Budget
export { Budget }
