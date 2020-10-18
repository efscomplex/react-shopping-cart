export type Size = number | "S" | "M" | "L" | "XL";

export interface Product {
  name: string;
  branch: string;
  description: string;
  size: Size;
  color: String;
  priceBefore: number;
  priceNow: number;
  images: string[];
  // * labels: string[]; /* pantalon ropa yellow */
}
