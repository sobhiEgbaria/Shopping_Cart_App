import ProductsButtons from "./ProductsButtons";

const Product = ({ name, price }) => {
  return (
    <li className="flex justify-between items-center">
      <h3 className="text-lg font-medium"> {name}</h3>
      <p className="grow text-sm text-gray-400">${price}</p>
      <ProductsButtons />
    </li>
  );
};

export default Product;
