import React from "react";
import CartList from "../components/cart/CartList";
export default function Cart({cartItems, addToCart, removeFromCart, removeQtyCart}) {
  console.log("cartiteeeeem",cartItems);
  return <div>
    <CartList cartList={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} removeQtyCart={removeQtyCart} />
  </div>;
}
