// Import the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 1245;

// Create a new HTTP server instance
const app = http.createServer((req, res) => {
  // Set the status code to 200 (OK)
  res.statusCode = 200;
  // Set the response header to plain text
  res.setHeader('Content-Type', 'text/plain');
  // Send the response with the message
  // "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Start the server and listen on the specified
// hostname and port
app.listen(port, hostname);

// Export the app to be used in ot
