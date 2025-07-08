import CartProduct from "./atoms/CartProduct";
const ShoppingCart = ({
  cartProducts,
  handleIncrementClick,
  handleDecrementClick,
  handleRemoveClick,
}) => {
  const cartContent = cartProducts.map((product) => {
    return (
      <CartProduct
        name={product.name}
        id={product.id}
        price={product.price}
        quantity={product.quantity}
        handleIncrementClick={handleIncrementClick}
        handleDecrementClick={handleDecrementClick}
        handleRemoveClick={handleRemoveClick}
      />
    );
  });

  const total = cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

      {cartProducts.length === 0 ? (
        <p className="text-gray-400 my-4">Your cart is empty.</p>
      ) : (
        <ul>{cartContent}</ul>
      )}

      <h3 className="text-lg font-bold">Total: ${total}</h3>
    </div>
  );
};

export default ShoppingCart;
