"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CartList from "./CartList";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setQuantities(Array(data.length).fill(1)); 
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold text-center mt-4">Keranjang Belanja</h1>
     <CartList cartItems={products} updateQuantity={() => {}} />
    </div>
  );
}
