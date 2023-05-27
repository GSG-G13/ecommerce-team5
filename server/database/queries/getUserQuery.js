import pool from '../config/connection.js';

const getUserQuery =(email) => {
  return pool.query('SELECT * FROM users  WHERE email = $1',[email]);
}

export default getUserQuery;