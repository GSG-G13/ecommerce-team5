import dotenv from 'dotenv';
dotenv.config();
import pool from './connection';
import fs from 'fs';
import join from 'path';

 
const createTables = fs.readFile(join(__dirname, 'build.sql'), 'utf8', (file) => {
    pool.query(file)
});


export default createTables;

