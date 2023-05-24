import { useState } from 'react';
import CartItem from './CartItem';

const CartItems = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Nike Air Max 270',
      category: 'shoes',
      price: 150,
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-mens-shoes-jBrhbr.png',
      quantity: 2,
    },
    {
      id: 2,
      title: 'Nike Air Max 270',
      category: 'shoes',
      price: 150,
      image:
        'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-mens-shoes-jBrhbr.png',
      quantity: 1,
    },
  ]);

  return (
    <div className="bag">
      <h2>Cart</h2>
      <div className="cart-products">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default CartItems;
