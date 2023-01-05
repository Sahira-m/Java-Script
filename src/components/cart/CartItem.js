import React from "react";
import "./CartItem.css";
export default function CartItem({
  item,
  removeFromCart,
  removeQtyCart,
  addToCart,totalQty,totalPrice
})
{ 
 
  return (
  <div className="tcontent">
 
 <p>{item.id} </p>
 <p>{item.title.slice(0, 20)}</p>
  <img className="cartImg" src={item.image} alt={item.title} /> 
  <div className="cartQuantity">
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
          
        <div className="cartPrice">$ {item.price * item.qty}</div>
       <div>
        <button
          type="button"
          className="removeFromCart"
          
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
        </div>
      

     
 </div>
 </div>

 );   
     
   //return(<div>Total :{totalQty} {totalPrice}</div>);
  }
 

 