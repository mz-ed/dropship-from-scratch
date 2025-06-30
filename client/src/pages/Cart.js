import { useState } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, userId }) => {
  const [showPayment, setShowPayment] = useState(false);

  const updateCartInDB = async (productId, quantity) => {
    try {
      await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          product_id: productId,
          quantity: quantity,
        }),
      });
    } catch (err) {
      console.error("Failed to sync cart with DB:", err);
    }
  };

  const handleQuantityChange = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );

    const item = cart.find((item) => item.id === id);
    if (item) updateCartInDB(id, delta);
  };

  const handleRemove = async (productId) => {
    // Remove from frontend
    setCart((prev) => prev.filter((item) => item.id !== productId));
  
    // Remove from backend (MySQL)
    try {
      await fetch("http://localhost:5000/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,           // <-- make sure userId is passed to the component
          product_id: productId,
        }),
      });
    } catch (err) {
      console.error("Failed to remove item from DB:", err);
    }
  };
  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed!");
    setShowPayment(false);
  };

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h2 className="cart-title">zainona Cart 😋</h2>

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
                    <button onClick={() => handleRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <p>
                Total: <strong>${total}</strong>
              </p>
              <button
                className="checkout-btn"
                onClick={() => setShowPayment(true)}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {showPayment && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Payment Details</h3>
            <form onSubmit={handlePaymentSubmit} className="payment-form">
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Card Number" required />
              <input type="text" placeholder="Expiry Date (MM/YY)" required />
              <input type="text" placeholder="CVV" required />
              <button type="submit" className="confirm-btn">
                Pay ${total}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowPayment(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
