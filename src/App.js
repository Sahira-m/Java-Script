import {Routes,Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {useState} from  "react";
import React from "react";

function App() {

const [cartList ,setCartList]=useState([]);
// addToCart function
function addToCart  (products)  {
  const updatedCartArray = [...cartList];
  const updatedProduct = { ...products, qty: 1 };
  const productIndex = updatedCartArray.findIndex(
    (item) => item.id === products.id
   
  );
 
  if (productIndex === -1) {
    setCartList([...updatedCartArray, updatedProduct]);
  } else {
    updatedCartArray[productIndex].qty += 1;
    setCartList(updatedCartArray);
  }
 
};
//console.log("cartlist",cartList);
//Function Remove from cart
function removeFromCart (selectedId)  {
  const updatedCartArray = cartList.filter((item) => item.id !== selectedId);
  setCartList(updatedCartArray);
};
//function for quantity change
function removeQtyCart(selectedId) {
  const productIndex = cartList.findIndex((item) => item.id ===selectedId);
  const updatedCartArray = [...cartList];
  if (productIndex !== -1 && updatedCartArray[productIndex].qty !== 1) {
    updatedCartArray[productIndex].qty -= 1;
    setCartList(updatedCartArray);
  } else {
    removeFromCart(selectedId);
  }
};
  return <div>
  
    
      <NavBar />
      <Routes>
         <Route path="/" element={<Home  addToCart={addToCart} />} /> 
         
        <Route path="/cart" element={<Cart 
        cartItems={cartList}
        addToCart={addToCart}
        removeQtyCart={ removeQtyCart}
        removeFromCart={ removeFromCart} />} />
        
      </Routes>
    
    </div>;
}

export default App;
