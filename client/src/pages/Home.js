import "../styles/home.css";

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">
      Welcome to <span className="highlight">DropShipX</span>
    </h1>
    <p className="home-subtitle">
      Your favorite destination for smart, simple, and scalable dropshipping.
    </p>
    <a href="/products" className="home-button">
      Explore Products
    </a>

    <div className="features-grid">
      <div className="feature-card">
        <h3>Fast Delivery</h3>
        <p>Rapid shipping through trusted global partners.</p>
      </div>
      <div className="feature-card">
        <h3>Secure Payments</h3>
        <p>Safe and encrypted transactions every time.</p>
      </div>
      <div className="feature-card">
        <h3>24/7 Support</h3>
        <p>Always here to help, day or night.</p>
      </div>
    </div>
  </div>
);

export default Home;
