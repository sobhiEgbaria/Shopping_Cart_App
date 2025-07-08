import ProductsButtons from "./ProductsButtons";

const Product = ({ product, handelAddProduct }) => {
  return (
    <li className="flex justify-between items-center">
      <h3 className="text-lg font-medium"> {product.name}</h3>
      <p className="grow text-sm text-gray-400">${product.price}</p>
      <ProductsButtons handelAddProduct={handelAddProduct} product={product} />
    </li>
  );
};

export default Product;
