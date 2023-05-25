import pool from '../../config/connection.js';

export const getProductsQuery = () => pool.query('select * from products');
