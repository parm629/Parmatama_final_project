"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
              <li key={product._id}>{product.name}</li>
          ))}
        </ul>
      </div>
  );
}
