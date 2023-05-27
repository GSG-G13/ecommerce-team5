/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product"
      onClick={() => {
        navigate(`/product/${product.id}`);
      }}
    >
      <div className="product-image">
        <img src={product.img_url} alt="Product" />
      </div>
      <div className="product-info">
        <h4>{product.title}</h4>
        <p className="disc">{product.discription}</p>
        <span>{product.category}</span>
        <p className="price">{product.price}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          fetch(`/cart/add/${product.id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity: 1 }),
          }).then((response) => response.json());
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
