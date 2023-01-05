import React from "react";
import CartItem from "./CartItem";
import "./CartList.css";
export default function CartList({
  cartList,
  removeFromCart,
  removeQtyCart,
  addToCart,
}) {
  //console.log("cl",cartList);
  let totalQty=0,totalPrice=0;
   function total()
   {
     cartList.map((item)=>
    {
       return (totalQty+=item.qty ,totalPrice+=item.price*item.qty);
     })
   }
   total();

  console.log("cartitem",cartList);
//   return( <div className="cart-list">
        
//   <table className="cartTable">
//     <thead>
//     <tr>
//       <th className="id">ID</th>
//       <th className="name">Name</th>
//       <th className="img">Image</th>
//       <th className="qty">Quantity</th>
//       <th className="price">Price</th>
//       <th className="rmv-btn">Remove</th>
//     </tr>
//     </thead>
   
//    <tbody> 
//     {cartList.map((item) => {
//       return (
//         <CartItem
//           key={item.id}
//           item={item}
//           totalQty={totalQty}
//           totalPrice={totalPrice}
//           addToCart={addToCart}
//           removeFromCart={removeFromCart}
//           removeQtyCart={removeQtyCart}
//         />
//       );
//     })}
//   </tbody>
//   </table>
//  </div> ) ;
return( <div className="cart-list">
        
<div className="cartTable">
  
<span className="thead">ID</span>
<span className="thead">Name</span>
<span className="thead">Image</span>
<span className="thead">Quantity</span>
<span className="thead">Price</span>
<span className="thead">Remove</span>
              

 
 </div>
  {cartList.map((item) => {
    return (
      <CartItem
        key={item.id}
        item={item}
        totalQty={totalQty}
        totalPrice={totalPrice}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        removeQtyCart={removeQtyCart}
      />
    );
  })}

</div> ) ;
  
    }