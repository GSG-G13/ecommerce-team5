import pool from '../../config/connection.js';

const getCartQuery = () =>
  pool.query(
    'SELECT products.title, categories.category, users.first_name, users.last_name  FROM cart INNER JOIN products ON cart.product_id = products.id INNER JOIN categories ON products.cat_id = categories.id INNER JOIN users ON cart.user_id = users.id',
  );

export default getCartQuery;
