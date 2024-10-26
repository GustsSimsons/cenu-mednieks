const pool = require('./db');

const testConnection = async () => {
    try {
        const res = await pool.query('SELECT NOW()'); // Simple query to get the current timestamp
        console.log('Connection successful! Current time:', res.rows[0].now);
    } catch (err) {
        console.error('Error connecting to the database:', err);
    } finally {
        pool.end(); // Close the pool to terminate connections
    }
};

testConnection();