// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  // Send a response with the message 'Hello Holberton School!'
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

// Export the app to be used in other modules
module.exports = app;
