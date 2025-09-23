"use client";

import React from "react";

export default function CartList({ cartItems = [], updateQuantity }) {
  return (
    <div className="cart-list">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.image}
            alt={item.title}
            className="item-image"
          />
          <div className="item-details">
            <h4>{item.title}</h4>
            <p>{item.description.substring(0, 100)}...</p>
            <p><strong>${item.price}</strong></p>
          </div>
        </div>
      ))}
    </div>
  );
}
