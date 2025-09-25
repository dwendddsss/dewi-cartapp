import React from "react";

const Navbar = ({ totalItems }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-pink-600">Shop</div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-pink-600 cursor-pointer">Seller Center</li>
          <li className="hover:text-pink-600 cursor-pointer">Notification</li>
          <li className="hover:text-pink-600 cursor-pointer">Shop</li>
        </ul>

        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Keranjang</span>
          <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {totalItems}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
