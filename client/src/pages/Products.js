import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image_url} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
