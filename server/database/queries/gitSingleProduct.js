import pool from '../config/connection.js';

const gitSingleProduct = (id) => {
  // return the result of the query (product with the given id joined with the category table)
  return pool.query(
    `SELECT products.id, products.title, products.discription, products.price, products.img_url, categories.category FROM products INNER JOIN categories ON products.cat_id = categories.id WHERE products.id = ${id}`,
  );
};

export default gitSingleProduct;
