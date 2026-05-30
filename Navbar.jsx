import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-yellow-400">
        AmazonClone
      </Link>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-md overflow-hidden w-[40%]">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 text-black outline-none"
        />

        <button className="bg-yellow-400 px-4 py-3 text-black">
          <FaSearch />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        
        <Link
          to="/login"
          className="hover:text-yellow-400 transition"
        >
          Login
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 hover:text-yellow-400 transition"
        >
          <FaShoppingCart size={22} />

          <span>Cart</span>

          {/* Cart Count */}
          <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full font-bold">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;