function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition duration-300">
      
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-contain"
      />

      <h2 className="text-lg font-semibold mt-4">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold mt-2">
        ₹{product.price}
      </p>

      <button 
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 py-2 rounded-md font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;