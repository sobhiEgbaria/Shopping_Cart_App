import CartProduct from "./atoms/CartProduct";
const ShoppingCart = ({ cartProducts }) => {
  console.log(cartProducts);

  const cartContent = cartProducts.map((product) => {
    return <CartProduct name={product.name} price={product.price} />;
  });

  return (
    <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

      <p className="text-gray-400 my-4">Your cart is empty.</p>

      <ul>{cartContent}</ul>

      <h3 className="text-lg font-bold">Total: $125</h3>
    </div>
  );
};

export default ShoppingCart;
