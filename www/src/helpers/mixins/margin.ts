import { css } from 'styled-components'

export const cssMargin = css `
   margin: ${(props: any)=> props.mg || props.margin};
   ${(props: any) =>
      props.mx &&
      `margin-left:${props.mx}; margin-right:${props.mx};`
   }
   ${(props: any) =>
      props.my &&
      `margin-top:${props.my};margin-bottom:${props.my};`
   }
   margin-right: ${(props: any)=> props.mr};
   margin-left: ${(props: any)=> props.ml};
   margin-top: ${(props: any)=> props.mt};
   margin-bottom: ${(props: any)=> props.mb};
`

export const cssPadding = css `
   padding: ${(props: any)=> props.pd || props.padding};
   ${(props: any) =>
      props.px &&
      `padding-left:${props.px}; padding-right:${props.px};`
   }
   ${(props: any) =>
      props.py &&
      `padding-top:${props.py};padding-bottom:${props.py};`
   }
   padding-right: ${(props: any)=> props.pr};
   padding-left: ${(props: any)=> props.pl};
   padding-top: ${(props: any)=> props.pt};
   padding-bottom: ${(props: any)=> props.pb};
`