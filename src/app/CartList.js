import React from "react";
import CartItem from "./CartItem";

const CartList = ({ cartItems, onIncrease, onDecrease }) => {
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))}
    </div>
  );
};

export default CartList;
