import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []); 

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img className= 'productimg' src={product.image} alt={product.title} />
        </div>
      ))}
    </div>
  );
};

export default Store;