// Import dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
bNK
// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Jenkins! Node.js application is running I  AM VAARUN.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export for testing
module.exports = app;
