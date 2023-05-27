import dotenv from 'dotenv';
import fs from 'fs';
import join from 'path';
import pool from './connection';

dotenv.config();

const createTables = fs.readFile(
  join(__dirname, 'build.sql'),
  'utf8',
  (file) => {
    pool.query(file);
  },
);

export default createTables;
