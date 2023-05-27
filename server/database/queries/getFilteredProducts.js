import pool from '../config/connection.js';

const getFilteredProductsQuery = (category) => {
  return pool.query(
    `SELECT products.id, products.title, products.discription, products.price, products.img_url, categories.category FROM products INNER JOIN categories ON products.cat_id = categories.id WHERE categories.category = '${category}'`,
  );
};

export default getFilteredProductsQuery;
