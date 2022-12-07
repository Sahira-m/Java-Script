import React from "react";
import "./ProductItem.css";
//export default function ProductItem({product, addToCart,cartList})
export default function ProductItem({product, addToCart})
 
 {
    return (
      
  
      <div className='productItem' key={product.id}>
        <div className="display">
        <p>Name: {product.title}</p>
        <img src={product.image} alt={product.name} />
        <p>Price: {product.price}</p>
        <button className='addToCartBtn' onClick={() => addToCart(product)}>ADD TO CART</button>
        </div>
      </div>
      
    )
  }

