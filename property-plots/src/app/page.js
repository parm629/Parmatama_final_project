"use client";

import { useEffect, useState } from 'react';
import Header from "@/app/components/Header";

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
      <>
        <Header/>
          {products.map((productData, index) => (
              <div className='container mx-auto my-8 p-4'>
                  <h1 className='text-4xl font-bold mb-4'>{productData.name}</h1>
                  <div className='flex flex-col md:flex-row items-center'>
                      <img src={`image_${index+1}.JPG`} alt='Product Image'
                           className='w-full md:w-1/2 rounded-lg shadow-lg'/>
                      <div className='mt-4 md:mt-0 md:ml-6'>
                          <h2 className='text-2xl font-semibold mb-2'>{productData.name}</h2>
                          <p className='text-gray-700 mb-4'>{productData.description}</p>
                          <p className='text-xl font-semibold mb-2'>Price: ₹{productData.price.toLocaleString()}</p>
                          <p className='text-lg mb-2'>Category: {productData.category}</p>
                          <p className='text-lg'>Stock: {productData.stock}</p>
                          <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                              Buy Now
                          </button>
                      </div>
                  </div>
              </div>
          ))}
      </>
  );
}
