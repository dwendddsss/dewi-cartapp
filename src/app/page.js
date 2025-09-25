"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CartList from "./CartList";

export default function Page() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const itemsWithQuantity = data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setCartItems(itemsWithQuantity);
      });
  }, []);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Navbar totalItems={totalItemsInCart} />

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
          🛒 Keranjang Belanja
        </h1>

        <CartList
          cartItems={cartItems}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </main>
    </div>
  );
}
