import pool from '../config/connection.js';

const getCategories = () => {
  return pool.query('SELECT * FROM categories');
};

export default getCategories;
