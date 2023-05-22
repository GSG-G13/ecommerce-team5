import {Pool} from 'pg';
require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();

const databaseUrl = process.env.DB_URL;


if (!databaseUrl) throw new Error ('No DB URL!');

const pool = new Pool ({
    connectionstring: databaseUrl,
    ssl: false
});

export default pool; 


