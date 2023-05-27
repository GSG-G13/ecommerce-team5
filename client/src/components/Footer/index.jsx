/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css';

const Footer = () => {
  const ul = [0, 1, 2, 3];
  return (
    <div className="footer">
      <div className="logo-img">Ecommerce</div>
      <div className="footer-links">
        {ul.map((val) => (
          <ul className="ul-links" key={val}>
            <li>
              <a href="#">Find A Store</a>
            </li>
            <li>
              <a href="#">Become A Member</a>
            </li>
            <li>
              <a href="#">Sign Up for Email</a>
            </li>
            <li>
              <a href="#">Send Us Feedback</a>
            </li>
            <li>
              <a href="#">Student Discounts</a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Footer;
