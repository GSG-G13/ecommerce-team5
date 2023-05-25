import addToCart from '../../database/queries/cart/addToCart.js';

const addProductToCart = async (req, res) => {
  const { id } = req.user;
  const { productId } = req.params;
  const count = 1;

  try {
    await addToCart(id, productId, count);
    res.json({ message: 'Item added to cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default { addProductToCart };
