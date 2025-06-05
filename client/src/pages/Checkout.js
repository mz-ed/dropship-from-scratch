import { useState } from "react";
import "../styles/checkout.css";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((field) => field === "")) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    console.log("Processing checkout:", form);
    // TODO: Send to backend/payment API
  };

  return (
    <div className="checkout-container">
      <div className="checkout-box">
        <h2 className="checkout-title">Checkout</h2>

        {error && <div className="checkout-error">{error}</div>}

        <form onSubmit={handleSubmit} className="checkout-form">
          <div>
            <h3 className="section-title">Shipping Information</h3>
            <div className="input-grid">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={form.address}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <div>
            <h3 className="section-title">Payment Details</h3>
            <div className="input-grid">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={form.cardNumber}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                className="input-field"
              />
              <input
                type="text"
                name="cvc"
                placeholder="CVC"
                value={form.cvc}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          <button type="submit" className="checkout-button">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
