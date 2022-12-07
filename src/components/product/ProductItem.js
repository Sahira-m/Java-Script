import React from "react";
import "./ProductItem.css";
//export default function ProductItem({product, addToCart,cartList})
export default function ProductItem({product, addToCart})
 
 {
    return (
      <div className='productItem' key={product.id}>
        <div className="display">
        <div><p>Name: {product.title}</p></div>
        <div><img src={product.image} alt={product.name} /></div>
       <div><p>Price: {product.price}</p></div> 
        <div><button className='addToCartBtn' onClick={() =>
           addToCart(product)}>ADD TO CART</button></div>
        </div>
      </div>
      
    )
  }

