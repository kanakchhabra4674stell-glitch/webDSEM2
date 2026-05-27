import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const products = [
  {
    id: 1,
    title: "Gaming Mouse",
    price: 999,
    image:
      "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 2499,
    image:
      "https://m.media-amazon.com/images/I/61CGHv6kmWL._SX679_.jpg",
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    price: 3499,
    image:
      "https://m.media-amazon.com/images/I/71c5xcgSFaL._SX679_.jpg",
  },
  {
    id: 4,
    title: "Smart Watch",
    price: 1999,
    image:
      "https://m.media-amazon.com/images/I/61y2VVWcGBL._SX679_.jpg",
  },
];

function Home({ cartItems, addToCart }) {
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar cartCount={cartCount} />
      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;