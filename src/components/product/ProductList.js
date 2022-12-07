
import React, {useState, useEffect} from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const url = "https://fakestoreapi.com/products";
//export default function ProductList({addToCart, cartList})
export default function ProductList({addToCart})
{
  const [items, setItems] = useState([]);

  function fetchItems() {
    fetch(url).then((response) => response.json())
    .then((items) => setItems(items))
    .catch((error) => console.error(error))
  }
  
  useEffect(() => {
    fetchItems();
  }, []);
  return(
  <div className="container">
    { items.slice(0,12).map((item)=> 
          // <ProductItem key={item.id} product={item} addToCart={addToCart} cartList={cartList}/>
        
          (<ProductItem key={item.id} product={item} addToCart={addToCart} />)
    )
}
  </div>
  );
}
