import connection from '../../config/connection';

const getTotalPrice = (userId) => {
  const sql = {
    text: 'SELECT SUM(p.price * c.count) AS total_price FROM cart c JOIN products p ON c.prod_id = p.id WHERE c.user_id = $1',
    values: [userId],
  };

  return connection.query(sql)
    .then((result) => result.rows[0].total_price)
    .catch((error) => {
      console.error('Error occurred:', error);
      throw error;
    });
};

export default { getTotalPrice };
