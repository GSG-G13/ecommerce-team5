import getTotalPrice from '../../database/queries/cart/getPrice.js';

const getTotalCartPrice = async (req, res) => {
  const { id } = req.user;
  try {
    const totalPriceResult = await getTotalPrice(id);
    const totalPrice = totalPriceResult.rows[0].total_price;

    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default { getTotalCartPrice };
