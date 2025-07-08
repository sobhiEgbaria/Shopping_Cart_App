import React from "react";

const ProductsButtons = ({ product, handelAddProduct }) => {
  return (
    <button
      onClick={() => handelAddProduct(product)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add to Cart
    </button>
  );
};

export default ProductsButtons;
