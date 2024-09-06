import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ul>
      {products.map((product) => (
        <li key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
