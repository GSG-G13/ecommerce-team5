import Footer from '../Footer';
import Navbar from '../Navbar';

const Cart = () => (
  <>
    <Navbar />
    <div className="cart">
      <div className="bag">
        <h2>Cart</h2>
        <div className="cart-products">
          <div className="cart-product">
            <div className="img-holder">
              <img
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-mens-shoes-jBrhbr.png"
                alt="Product"
                className="cart-product-image"
              />
            </div>
            <div className="cart-product-details">
              <h4 className="cart-product-title">Product Title</h4>
              <p className="cart-product-category">Category Name</p>
              <div className="cart-product-quantity">
                <button type="button" className="cart-product-quantity-button">
                  -
                </button>
                <p className="cart-product-quantity-number">1</p>
                <button type="button" className="cart-product-quantity-button">
                  +
                </button>
              </div>
            </div>
            <p className="cart-product-price">$50.00</p>
            <div className="delete-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />
              </svg>
            </div>
          </div>
          <div className="cart-product">
            <div className="img-holder">
              <img
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-mens-shoes-jBrhbr.png"
                alt="Product"
                className="cart-product-image"
              />
            </div>
            <div className="cart-product-details">
              <h4 className="cart-product-title">Product Title</h4>
              <p className="cart-product-category">Category Name</p>
              <div className="cart-product-quantity">
                <button type="button" className="cart-product-quantity-button">
                  -
                </button>
                <p className="cart-product-quantity-number">1</p>
                <button type="button" className="cart-product-quantity-button">
                  +
                </button>
              </div>
            </div>
            <p className="cart-product-price">$50.00</p>
            <div className="delete-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />
              </svg>
            </div>
          </div>
          <div className="cart-product">
            <div className="img-holder">
              <img
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-mens-shoes-jBrhbr.png"
                alt="Product"
                className="cart-product-image"
              />
            </div>
            <div className="cart-product-details">
              <h4 className="cart-product-title">Product Title</h4>
              <p className="cart-product-category">Category Name</p>
              <div className="cart-product-quantity">
                <button type="button" className="cart-product-quantity-button">
                  -
                </button>
                <p className="cart-product-quantity-number">1</p>
                <button type="button" className="cart-product-quantity-button">
                  +
                </button>
              </div>
            </div>
            <p className="cart-product-price">$50.00</p>
            <div className="delete-btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <div className="summary-details">
          <div className="summary-detail">
            <p className="summary-detail-title">Total</p>
            <p className="summary-detail-price">$160.00</p>
          </div>
        </div>
        <button type="button" className="summary-checkout-button">
          continue to checkout
        </button>
      </div>
    </div>
    <Footer />
  </>
);

export default Cart;
