const Header = ({ cartProducts }) => {
  const total = cartProducts.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <div className="flex justify-between items-center p-6 bg-gray-800 text-white rounded-lg">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <p className="bg-amber-600 text-white text-lg font-semibold py-1 px-4 rounded-full">
        {total + " "}
        {total < 1 ? "Item" : "Items"}
      </p>
    </div>
  );
};

export default Header;
