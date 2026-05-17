import CartItem from "../components/CartItem";

function Cart({ cartItems = [], removeFromCart }) {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-col gap-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      <div className="bg-white mt-6 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold">
          Total: ₹{total}
        </h2>

        <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-md font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;