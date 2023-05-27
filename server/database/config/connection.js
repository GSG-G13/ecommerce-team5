import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const databaseUrl = `${process.env.DB_URL}`;

if (!databaseUrl) throw new Error('No DB URL!');

const pool = new Pool({
  user: 'momen',
  host: 'localhost',
  database: 'ecommerce',
  password: '056715',
  port: '5432',
});

export default pool;
