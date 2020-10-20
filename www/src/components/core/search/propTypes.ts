import { Theme } from '../../../types'

export interface Props {
   [prop: string]: any;
   fancy?: string;
   label?: string;
   $expand?: boolean;
   children?: any;
   theme?: Theme;
   mb?: string;
}