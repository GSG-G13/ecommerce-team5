import { useEffect, useState } from 'react';
import Counter from './Counter';

const CartItem = ({ cartItem }) => {
  // eslint-disable-next-line no-unused-vars
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(cartItem.quantity);
  }, [cartItem.quantity]);

  useEffect(() => {
    document.querySelector('.delete-btn').addEventListener('click', () => {
      fetch(`/api/user/cart/${cartItem.id}`).then((res) => res.json());
    });

    return () => {
      document.querySelector('.delete-btn').removeEventListener('click', () => {
        fetch(`/api/user/cart/${cartItem.id}`).then((res) => res.json());
      });
    };
  }, []);

  return (
    <div className="cart-product">
      <div className="img-holder">
        <img
          src={cartItem.image}
          alt="Product"
          className="cart-product-image"
        />
      </div>
      <div className="cart-product-details">
        <h4 className="cart-product-title">{cartItem.title}</h4>
        <p className="cart-product-category">{cartItem.name}</p>
        <Counter quantity={quantity} setQuantity={setQuantity} />
      </div>
      <p className="cart-product-price">{cartItem.price}</p>
      <div className="delete-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" />
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
