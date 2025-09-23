"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CartList from "./CartList";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        const updated = data.map((item) => ({ ...item, quantity: 1 }));
        setProducts(updated);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const updateQuantity = (id, newQty) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="app">
      <Navbar totalItems={products.length} />

      <div className="container">
        <h1>Produk di Keranjangmu</h1>
        <CartList cartItems={products} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}
