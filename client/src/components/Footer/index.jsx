/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css';

const Footer = () => {
  const ul = [0, 1, 2, 3, 4];
  return (
    <div className="footer">
      <img src="/images/logo-image.svg" alt="Logo" className="logo-img" />
      <div className="footer-links">
        {ul.map(() => (
          <ul className="ul-links">
            <li><a href="#">Find A Store</a></li>
            <li><a href="#">Become A Member</a></li>
            <li><a href="#">Sign Up for Email</a></li>
            <li><a href="#">Send Us Feedback</a></li>
            <li><a href="#">Student Discounts</a></li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Footer;
