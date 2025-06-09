import React, { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";
import "../styles/products.css"; // 👈 import your CSS

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
        <div key={product.id} className="product-card">
        <img src={product.image_url} alt={product.name} className="product-image" />
        <div className="product-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
