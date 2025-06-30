// src/pages/Signup.js
import { useState } from "react";
import "../styles/login.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = formData;

    if (!name || !email || !password || !confirm) {
      return setError("Please fill in all fields.");
    }
    if (password !== confirm) {
      return setError("Passwords do not match.");
    }

    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return setError(data.message || "Signup failed.");
      }

      setSuccess("Signup successful! You can now log in.");
      setFormData({ name: "", email: "", password: "", confirm: "" });
    } catch (err) {
      console.error("Signup error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Create an Account</h2>

        {error && <div className="login-error">{error}</div>}
        {success && <div className="login-success">{success}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              placeholder="••••••••"
              value={formData.confirm}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">Sign Up</button>
        </form>

        <p className="login-footer">
          Already have an account? <a href="/signup">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
