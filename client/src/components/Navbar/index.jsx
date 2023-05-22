/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import { useNavigate } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const loginNav = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/images/logo-image.svg" alt="Logo" className="logo-image" />
      </div>
      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
      </ul>
      <button className="login-btn" onClick={() => loginNav('/login')}>Login</button>
    </div>
  );
};

export default Navbar;
