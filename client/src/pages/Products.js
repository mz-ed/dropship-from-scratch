import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import "../styles/products.css"; // assuming you have your styles here

const Products = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      const formatted = data.map((p) => ({
        ...p,
        price: Number(p.price),
      }));
      setProducts(formatted);
    });
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
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
