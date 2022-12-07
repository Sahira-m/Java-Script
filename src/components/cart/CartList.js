import React from "react";
import CartItem from "./CartItem"
import "./Cart.css";

export default function CartList({
  cartList,
  removeFromCart,
  removeQtyCart,
  addToCart,
}) {
  console.log("cartitem",cartList);
  return( <div className="cartList">
        
  <table className="cartTable">
    <thead>
    <tr>
      <th className="id">ID</th>
      <th className="name">Name</th>
      <th className="img">Image</th>
      <th className="qty">Quantity</th>
      <th className="price">Price</th>
      <th className="removeBtn">Remove</th>
    </tr>
    </thead>
   
   <tbody> 
    {cartList.map((item) => {
      return (
        <CartItem
          key={item.id}
          item={item}
          
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          removeQtyCart={removeQtyCart}
        />
      );
    })}
  </tbody>
  </table>
 </div> ) ;
  
    }
     
    
    