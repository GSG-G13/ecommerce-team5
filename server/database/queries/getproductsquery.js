import pool from '../config/connection.js';

// i want to return the result of the query (all products joined with the category table)

export const getProductsQuery = (queryCat) => {
  if (queryCat) {
    return pool.query(
      `SELECT products.id, products.title, products.discription, products.price, products.img_url, categories.category FROM products INNER JOIN categories ON products.cat_id = categories.id WHERE categories.category = '${queryCat}'`,
    );
  }
  return pool.query(
    'SELECT products.id, products.title, products.discription, products.price, products.img_url, categories.category FROM products INNER JOIN categories ON products.cat_id = categories.id',
  );
};

// export  {getProductsQuery};
