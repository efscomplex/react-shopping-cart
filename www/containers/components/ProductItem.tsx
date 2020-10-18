import React from "react";
import Proptypes from "prop-types";

const ProductItem = ({ product }) => {
  return (
    <li>
      <img src={product.images[0]}></img>
      <p>{product.name}</p>
      <p>{product.priceNow}</p>
    </li>
  );
};

ProductItem.proptype = {
  product: Proptypes.object.isRequired,
  images: Proptypes.array.isRequired,
  name: Proptypes.string.isRequired,
  priceNow: Proptypes.number.isRequired,
};

export default ProductItem;
