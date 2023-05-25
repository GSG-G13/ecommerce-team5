import connection from '../../config/connection';

const addToCart = (userId, productId, count) => {
  const sql = {
    text: 'INSERT INTO cart (cart_id, product_id, count) VALUES ((SELECT id FROM cart WHERE user_id = $1), $2, $3) RETURNING *',
    values: [userId, productId, count],
  };

  return connection.query(sql);
};

export default { addToCart };
