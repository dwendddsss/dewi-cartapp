"use client";
import { useState } from "react";

const Navbar = ({ totalItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-bold text-pink-600">Shop</div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-pink-600 cursor-pointer">Home</li>
          <li className="hover:text-pink-600 cursor-pointer">Notification</li>
          <li className="hover:text-pink-600 cursor-pointer">Seller Center</li>
        </ul>

        {/* Cart + Hamburger */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Keranjang</span>
            <span className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {totalItems}
            </span>
          </div>

          {/* Hamburger only on mobile */}
          <button
            className="md:hidden p-2 text-gray-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2">
          <div className="hover:text-pink-600 cursor-pointer">Home</div>
          <div className="hover:text-pink-600 cursor-pointer">Notification</div>
          <div className="hover:text-pink-600 cursor-pointer">Seller Center</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
