import pool from "../config/connection.js";

const signupQuery = (firstName, lastName, email, password, picture) => {
  return pool.query('INSERT INTO users (first_name,  last_name,  email, password, img_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',[firstName, lastName, email, password, picture])
}


export default signupQuery;