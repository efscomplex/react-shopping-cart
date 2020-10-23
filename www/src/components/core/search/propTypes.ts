import { Theme } from '../../../types'

export interface Props {
   [prop: string]: any;
   width?: string;
   label?: JSX.Element;
   children?: any;
   theme?: Theme;
   mb?: string;
}