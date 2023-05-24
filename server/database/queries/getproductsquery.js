import pool from "../config/connection.js";

export const getProductsQuery = () => {
  return pool.query('select * from products');
} ;


// export  {getProductsQuery};