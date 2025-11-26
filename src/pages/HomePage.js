import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(p => (
          <div key={p._id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={p.image} alt={p.name} width="100%" />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;