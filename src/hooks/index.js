import React from "react";

import { CartProvider } from "./cart";

const ProductsProvider = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
export default ProductsProvider;
