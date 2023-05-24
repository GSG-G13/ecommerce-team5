import { useEffect } from 'react';

const Counter = ({ quantity, setQuantity }) => {
  useEffect(() => {
    document
      .querySelector('.cart-product-quantity-button-decrease')
      .addEventListener('click', () => {
        fetch(`/api/user/cart/${quantity}`).then((res) => res.json());
      });

    return () => {
      document
        .querySelector('.cart-product-quantity-button-decrease')
        .removeEventListener('click', () => {
          fetch(`/api/user/cart/${quantity}`).then((res) => res.json());
        });
    };
  }, [quantity]);

  useEffect(() => {
    document
      .querySelector('.cart-product-quantity-button-increase')
      .addEventListener('click', () => {
        fetch(`/api/user/cart/${quantity}`).then((res) => res.json());
      });

    return () => {
      document
        .querySelector('.cart-product-quantity-button-increase')
        .removeEventListener('click', () => {
          fetch(`/api/user/cart/${quantity}`).then((res) => res.json());
        });
    };
  }, [quantity]);

  return (
    <div className="cart-product-quantity">
      <button
        type="button"
        className="cart-product-quantity-button-decrease"
        onClick={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        }}
      >
        -
      </button>
      <p className="cart-product-quantity-number">{quantity}</p>
      <button
        type="button"
        className="cart-product-quantity-button-increase"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
