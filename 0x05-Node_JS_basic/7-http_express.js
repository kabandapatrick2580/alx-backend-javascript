const express = require('express');
const { countStudents } = require('./3-read_file_async');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

server.get('/students', (req, res) => {
    const filePath = 'database.csv';
    countStudents(filePath)
        .then(total => {
            res.send(`This is the list of our students. Total number of students: ${total}`);
        })
        .catch(err => {
            res.status(500).send(err.message);
        });
});

const PORT = 1245;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = server;
