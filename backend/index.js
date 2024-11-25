const express = require('express');
const path = require('path');
const pool = require('../database/db.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the ../frontend directory
app.use(express.static(path.resolve(__dirname, '../frontend')));

// Serve the main HTML file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/html/index.html'));
});

app.get('/main-window', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/html/MainWindow.html'));
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


app.get('/get-items', async (req, res) => {
    try {
        // Query the first 5 items with store name
        const result = await pool.query(`
            SELECT i.price, i.name, i.image, s.name AS store_name
            FROM items i
            JOIN stores s ON i.s_id = s.id
            LIMIT 5;
        `);

        // Check if we got results
        if (result.rows.length > 0) {
            res.json(result.rows); // Send the items as a JSON array
        } else {
            res.status(404).json({ error: 'No items found' });
        }
    } catch (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/get-items-main-window', async (req, res) => {     //GET ALL THE ITEMS FOR THE MAIN WINDOW
    try {
        // Query the first 15 items with store name
        const result = await pool.query(`
            SELECT i.price, i.name, i.image, s.name AS store_name, s.link
            FROM items i
            JOIN stores s ON i.s_id = s.id;
        `);

        // Check if we got results
        if (result.rows.length > 0) {
            res.json(result.rows); // Send the items as a JSON array
        } else {
            res.status(404).json({ error: 'No items found' });
        }
    } catch (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Fallback route for 404
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});