const CartProduct = ({
  name,
  price,
  quantity,
  id,
  handleIncrementClick,
  handleDecrementClick,
  handleRemoveClick,
}) => {
  return (
    <li className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-sm text-gray-400">
          ${price} x {quantity}
        </p>
      </div>

      <div className="flex items-center gap-2 *:transition-colors">
        <button
          onClick={() => handleIncrementClick(id)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded"
        >
          +
        </button>

        <button
          onClick={() => handleDecrementClick(id)}
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
        >
          -
        </button>
        <button
          onClick={() => handleRemoveClick(id)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
        >
          Remove
        </button>
      </div>
      <p className="text-sm font-semibold text-blue-400">${price * quantity}</p>
    </li>
  );
};

export default CartProduct;
