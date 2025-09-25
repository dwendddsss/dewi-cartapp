import React from "react";

const CartItem = ({ item, onIncrease, onDecrease }) => {
  const { id, title, image, price, quantity } = item;
  const totalItemPrice = price * quantity;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4 mb-4">
      {/* Gambar produk */}
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-contain rounded-md"
      />

      {/* Detail */}
      <div className="flex-1">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-gray-600">Harga: ${price.toFixed(2)}</p>

        {/* Counter */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onDecrease(id)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => onIncrease(id)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>

        <p className="mt-2 font-semibold text-pink-600">
          Total: ${totalItemPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
