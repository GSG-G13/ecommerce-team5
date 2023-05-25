/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import './style.css';

import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 1,
    title: 'Nike Air Max 270',
    category: 'shoes',
    price: 150,
    image:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fc1ac524-05f5-4273-8281-6031f63851a2/air-max-pulse-mens-shoes-ShS3tL.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, quam nisl ultricies nisl',
  });
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   fetch(`/api/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //     });
  // }, [id]);

  // useEffect(() => {
  //   fetch('/api/cart')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCart(data);
  //     });
  // }, [cart]);

  const addToCart = () => {
    fetch(`/api/cart/add/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: product.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
      });
  };
  return (
    <div className="single-product-page">
      <div className="single-product">
        <img
          src={product.image}
          alt="Product"
          className="single-product-image"
        />
        <div className="single-product-details">
          <h1 className="single-product-title">{product.title}</h1>
          <p className="single-product-category">{product.category}</p>
          <p className="single-product-description">{product.description}</p>
          <p className="single-product-price">{product.price}</p>
          <button className="single-add-to-cart-button" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
