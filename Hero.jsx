function Hero() {
  return (
    <div className="w-full h-100 relative">
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/40 flex flex-col justify-center pl-10 text-white">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Amazon Clone
        </h1>

        <p className="text-xl mb-6">
          Discover amazing products at the best prices
        </p>

        <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold w-fit hover:bg-yellow-500">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;