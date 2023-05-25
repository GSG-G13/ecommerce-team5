import deleteProductFromCart from '../../database/queries/cart/deleteProductFromCart.js';

const deleteCartsProduct = async (req, res) => {
  const { id } = req.user;
  const { productId } = req.params;

  try {
    await deleteProductFromCart(id, productId);
    res.json({ message: 'Item removed from cart successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default { deleteCartsProduct };
