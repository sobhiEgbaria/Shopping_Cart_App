import data from "../products";
import Product from "./atoms/Product";

const ProductsList = ({ handelAddProduct }) => {
  const products = data.products;
  const listOfProducts = products.map((product) => {
    return <Product product={product} handelAddProduct={handelAddProduct} />;
  });
  return (
    <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <ul className="flex flex-col gap-y-4 *:gap-x-6">{listOfProducts}</ul>
    </div>
  );
};

export default ProductsList;
