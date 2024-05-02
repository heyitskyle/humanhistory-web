// Initialize Express app and serve static files from React app
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS and JSON body parsing
app.use(cors());
app.use(bodyParser.json());

// Serve static files from React app
app.use(express.static('../client/build'));

// Serve API routes
app.get('/api/events', (req, res) => {
    res.json(require('./data.json'));
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});