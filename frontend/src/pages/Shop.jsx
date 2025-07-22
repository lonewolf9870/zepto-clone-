import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CustomerContext } from '../Context/CustomerContext';
function Shop() {
  const [items, setItems] = useState([]);
  const {CustomerId} = useContext(CustomerContext);
  const handleCart = async (itemId) => {
    const item = items.find((i) => i.id === itemId);
    if (!CustomerId) {
      alert("please log in to add items to your cart");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/cart/", {
        customer: CustomerId,
        item_name: item.name,
        quantity: 1,
        price: item.price
      })
      if(response.status === 201){
        alert("item added to cart")
      }else{
        alert("failed to add item to cart");
      }
    }catch(error){
      console.log("error adding to cart",error);
    }
    }

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8000/shop/shop-items/');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching shop items:', error);
      }
    };

    fetchItems();
  }, []);
  return (
    <div>
      <h2>Shop Items</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}$ </p>
          <button onClick={() => handleCart(item.id)}>add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Shop