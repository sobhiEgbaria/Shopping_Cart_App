const CartProduct = ({ name, price }) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-gray-400">${price} x 5</p>
      </div>

      <div className="flex items-center gap-2 *:transition-colors">
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">
          +
        </button>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded">
          -
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
          Remove
        </button>
      </div>
      <p className="text-sm font-semibold text-blue-400">$125</p>
    </li>
  );
};

export default CartProduct;
