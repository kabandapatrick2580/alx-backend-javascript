// Display a welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input from the standard input stream
process.stdin.on('readable', () => {
  // Read the input
  const name = process.stdin.read();
  // Check if input is not null
  if (name !== null) {
    // Display the name
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Listen for the end of the standard input stream
process.stdin.on('end', () => {
  // Display a closing message
  process.stdout.write('This important software is now closing\n');
});
