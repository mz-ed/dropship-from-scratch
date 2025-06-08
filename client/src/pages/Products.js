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
            <img
              src={product.image_url}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="product-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
