import { useState } from "react";
import "../styles/cart.css";

const initialCart = [
  { id: 1, name: "Product A", price: 19.99, quantity: 1 },
  { id: 2, name: "Product B", price: 29.99, quantity: 2 },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleQuantityChange = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h2 className="cart-title">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="item-actions">
                    <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    <button onClick={() => handleRemove(item.id)} className="remove-btn">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <p>Total: <strong>${total}</strong></p>
              <button className="checkout-btn" onClick={() => alert("Proceeding to checkout...")}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
