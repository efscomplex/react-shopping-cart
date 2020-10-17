export type Size = number | 's' | 'x' | 'm' | 'xl';

export interface Product {
   name: string;
   branch: string;
   description: string;
   size: Size;
   color: String;
   price: number;
   images: string[];
   // * labels: string[]; /* pantalon ropa yellow */
}
