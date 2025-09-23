import React from 'react';

const Navbar = ({ totalItems }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">ManagHer Shop</div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Shop</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      
      <div className="nav-cart">
        Keranjang: <span className="cart-badge">{totalItems}</span>
      </div>
    </nav>
  );
};

export default Navbar;

