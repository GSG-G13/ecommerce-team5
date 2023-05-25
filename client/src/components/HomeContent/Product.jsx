/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
  const { name, id } = product;
  const navigate = useNavigate();

  return (
    <div
      className="product"
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <div className="product-image">
        <img
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fc1ac524-05f5-4273-8281-6031f63851a2/air-max-pulse-mens-shoes-ShS3tL.png"
          alt="Product"
        />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <p className="disc">Product Description</p>
        <span>category</span>
        <p className="price">40$</p>
      </div>
      <button type="button">Add to Cart</button>
    </div>
  );
};

export default Product;
