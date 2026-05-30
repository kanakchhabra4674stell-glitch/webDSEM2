function CartItem({ item, removeFromCart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
      
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 object-contain"
      />

      <div className="flex-1">
        <h2 className="text-xl font-semibold">
          {item.title}
        </h2>

        <p className="text-green-600 font-bold mt-2">
          ₹{item.price}
        </p>

        <p className="mt-1">
          Quantity: {item.quantity}
        </p>
      </div>

      <button 
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;