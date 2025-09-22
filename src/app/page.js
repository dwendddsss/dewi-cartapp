"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  
  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="container">
      <h1>Produk dari FakeStoreAPI</h1>
      <div className="cart-list">
        {products.map((item) => (
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
    </div>
  );
}
