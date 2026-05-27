function Footer() {
  return (
    <footer className="bg-black text-white mt-10 py-8">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400">
            Amazon Clone
          </h2>

          <p className="text-gray-300">
            A modern Amazon-inspired shopping website built using
            React and Tailwind CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400">
            Quick Links
          </h2>

          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-yellow-400 cursor-pointer">
              Login
            </li>

            <li className="hover:text-yellow-400 cursor-pointer">
              Cart
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-400">
            Contact
          </h2>

          <p className="text-gray-300">
            Email: support@amazonclone.com
          </p>

          <p className="text-gray-300 mt-2">
            Phone: +91 9876543210
          </p>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © 2026 Amazon Clone. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;