import getCartQuery from '../../database/queries/cart/getCart.js';

const getCartController = async (req, res) => {
  const { id } = req.user;
  try {
    const cartItems = await getCartQuery(id);
    res.json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default getCartController;
