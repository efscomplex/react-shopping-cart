import React from "react";
import ProductItem from "./components/ProductItem";
import ProductMock from "../__mocks__/product";

export type Size = number | "XS" | "S" | "M" | "L" | "XL" | "2XL";

export interface Product {
  name: string;
  // branch: string;
  description: string;
  size: Size;
  color: String;
  priceBefore: number;
  priceNow: number;
  images: string[];
  // * labels: string[]; /* pantalon ropa yellow */
}

function ProductList() {
  return (
    <ul>
      {ProductMock.map((productItem: typeof Product) => (
        <ProductItem product={productItem} key={productItem.name} />
      ))}
    </ul>
  );
}

export default ProductList;
