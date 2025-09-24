import React from 'react';

const CartItem = ({ item }) => {
  const { title, image, price, quantity } = item;
  const totalItemPrice = price * quantity;

  return (
    <div className="cart-item">
      <img src={image} alt={title} className="item-image" />
      <div className="item-details">
        <h4>{title}</h4>
        <p>Harga Satuan: ${price.toFixed(2)}</p>
        <p>Jumlah: {quantity}</p>
        <p className="item-total">Total: ${totalItemPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
