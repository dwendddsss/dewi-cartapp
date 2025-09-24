"use client";

import React from "react";
import CartItem from "./CartItem"; 

export default function CartList({ cartItems = [], updateQuantity }) {
  return (
    <div className="cart-list">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity} 
        />
      ))}
    </div>
  );
}
