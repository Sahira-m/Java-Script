import React from "react";
import "./Cart.css";
export default function CartItem({
  item,
  removeFromCart,
  removeQtyCart,
  addToCart,
})

{
 
  return (
    <div className="cartItem">
      <tbody>
      <tr>
        <td className="cartId">{item.id}</td>
        <td className="cartTitle">{item.title.slice(0, 20)}</td>
        <td className="cartImg">
          <img src={item.image} alt={item.title} />
        </td>
        <td className="cartQuantity">
         
          <button
            className="removeQuantityBtn"
            onClick={() => removeQtyCart(item.id)}
          >
            -
          </button>
          <span>{item.qty}</span>
         
          <button className="cartQuantityBtn" onClick={() => addToCart(item)}>
            +
          </button>
        </td>
        <td className="cartPrice">$ {item.price * item.qty}</td>
        <button
          type="button"
          className="removeFromCart"
          
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </tr>
      </tbody>
     
    </div>
  );
}
 