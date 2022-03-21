const express = require('express');
const PORT = process.env.port || 3001;

const app = express();

// Middleware 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Starts the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});