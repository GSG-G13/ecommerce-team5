import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

let databaseUrl = `${process.env.DB_URL}`;

if (!databaseUrl) throw new Error ('No DB URL!');

const pool = new Pool ({
  user: 'ahmedecommerece',
  host: 'localhost',
  database: 'ecommerece',
  password: '123456', 
  port: '5432',
});

export default pool; 


