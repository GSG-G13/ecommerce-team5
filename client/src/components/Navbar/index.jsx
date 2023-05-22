/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <img src="/images/logo-image.svg" alt="Logo" className="logo-image" />
    </div>
    <ul className="links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
    </ul>
    <button className="login-btn">Login</button>
  </div>
);

export default Navbar;
