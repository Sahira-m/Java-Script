
import React, {useState, useEffect} from "react";
import ProductItem from "./ProductItem";
import "./ProductList.css";

const url = "https://fakestoreapi.com/products";
export default function ProductList()
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
  <div className="product">
    {
    items.slice(0,12).map((item)=> {
      return<ProductItem props={item} key={item.id}/>
    }
    )
    
  }
  </div>
  );

//    return <div>ProductList
//     <div className="productList">
//       {items.slice(0,9).map((item) =>{
//   return <div key={item.id}> Name: {item.title} Price:{item.price}<img src={item.image} alt="images"></img>
//   <button className='addToCartBtn' >ADD TO CART</button> </div>;
// })}



//     </div>
//    </div>;
 
}
