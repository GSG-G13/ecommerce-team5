/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import './style.css';

import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data[0]);
      });
  }, [id]);

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
          src={product.img_url}
          alt="Product"
          className="single-product-image"
        />
        <div className="single-product-details">
          <h1 className="single-product-title">{product.title}</h1>
          <p className="single-product-category">{product.category}</p>
          <p className="single-product-description">{product.discription}</p>
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
