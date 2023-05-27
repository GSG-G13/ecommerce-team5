import pool from "../config/connection.js";

const loginQuery = (email) => {

  return pool.query('SELECT * FROM users WHERE email = $1', [email])
}

export default loginQuery;