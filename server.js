const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.port || 3001;

const app = express();

// Middleware 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: '',
        database: 'election'
    },
    console.log('Connected to the elcetion database.')
);

// Query method 
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Starts the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});