import React from "react";
import ProductList from "../components/product/ProductList";
export default function Home({addToCart,cartList}) {
//console.log("home",{cartList});
  return <div>
   {/* <ProductList addToCart={addToCart} cartItems={cartList}></ProductList>  */}
   <ProductList addToCart={addToCart} ></ProductList> 
  </div>;
}
