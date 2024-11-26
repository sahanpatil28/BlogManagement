const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes'); // Import the routes

// Middleware
app.use(bodyParser.json()); // To parse JSON requests

// Use routes
app.use('/api', authRoutes); // Mount the routes under the `/api` path

// Start server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
