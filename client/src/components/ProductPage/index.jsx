/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import './style.css';

const ProductPage = () => (
  <div className="single-product-page">
    <div className="single-product">
      <img src="/images/logo-image.svg" alt="Product" className="single-product-image" />
      <div className="single-product-details">
        <h1 className="single-product-title">Product Title</h1>
        <p className="single-product-category">Category Name</p>
        <p className="single-product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam exercitationem provident et culpa harum quas inventore eveniet velit laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam exercitationem provident et culpa harum quas inventore eveniet velit laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam exercitationem provident et culpa harum quas inventore eveniet velit laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="single-product-price">$50</p>
        <button className="single-add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  </div>
);

export default ProductPage;
