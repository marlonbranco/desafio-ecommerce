import React from "react";
import { FiThumbsUp } from "react-icons/fi";

import formatValue from "../../utils/formatValue";

const Products = ({ product }) => {
  return (
    <>
      <img src={`/assets/${product.image}`} alt={product.name} />
      <h4>{product.name}</h4>
      <p>
        <FiThumbsUp size={17} />
        {` ${product.score}`}
      </p>

      <p>
        <strong>{formatValue(product.price)}</strong>
      </p>
    </>
  );
};

export default Products;
