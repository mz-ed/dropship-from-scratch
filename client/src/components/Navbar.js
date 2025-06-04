// client/src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex gap-4">
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/checkout">Checkout</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">My Account</Link>
  </nav>
);

export default Navbar;
