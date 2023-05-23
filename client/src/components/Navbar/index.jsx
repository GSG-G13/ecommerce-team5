/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Ecommerce
      </Link>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      {/* <button className="login-btn" onClick={() => navigate('/signup')}>
        Sign Up
      </button> */}
      <div className="cart-icon">
        <img
          src="https://png2.cleanpng.com/sh/55241d767707a889ea16afc60499ebc5/L0KzQYm3VcIzN5h1h5H0aYP2gLBuTfUua5Dyhdd7Y3Wwc7F0kQV1baMygdV4boOwg7n2kQBqdpgye9N7dD32f7f7lBFzbV53RdZ4dIPogn7AhfIubKZnhNt3LUXlQIW6UfE2QGY5e9cBLkCzQIa9U8MxOWY3T6I5MUWzSYa7Vr5xdpg=/kisspng-e-commerce-computer-icons-shopping-cart-software-r-dotser-web-dublin-5b0431a5854ce6.000563301527001509546.png"
          alt="cart"
          onClick={() => navigate('/cart')}
        />
      </div>
    </div>
  );
};

export default Navbar;
