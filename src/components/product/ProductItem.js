import React from "react";
import "./ProductItem.css";
export default function ProductItem({props})
 {
  
  
    return (
      <div className="main">
      <div className='productItem' key={props.id}>
        <p>Name: {props.title}</p>
        <img src={props.image} alt={props.name} />
        <p>Price: {props.price}</p>
        <button className='addToCartBtn'>ADD TO CART</button>
      </div>
      </div>
    )
  }

