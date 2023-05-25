import connection from '../../config/connection';

const deleteProductFromCart = (userId, productId) => {
  const sql = {
    text: 'DELETE FROM cart WHERE user_id = $1 AND prod_id = $2',
    values: [userId, productId],
  };

  return connection.query(sql);
};

export default { deleteProductFromCart };
