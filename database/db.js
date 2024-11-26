// database/db.js
const { Pool } = require('pg');
require('dotenv').config({ path: '../backend/.env' }); // Load environment variables from .env file in backend

const pool = new Pool({
    connectionString: process.env.DATABASE_URL // Use your connection string from .env
});

module.exports = pool;
