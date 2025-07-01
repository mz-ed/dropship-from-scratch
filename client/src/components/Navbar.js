// client/src/components/Navbar.js
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/checkout">Checkout</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">My Account</Link>
    <Link to="/signup">signup</Link>
  </nav>
);

export default Navbar;
