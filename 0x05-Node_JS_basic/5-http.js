const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      
      const rows = data.split('\n').slice(1, -1);
      const header = data.split('\n').slice(0, 1)[0].split(',');
      const idxFName = header.findIndex((ele) => ele === 'firstname');
      const idxField = header.findIndex((ele) => ele === 'field');
      const fieldCounts = {};
      const studentsByField = {};
      const allData = {};

      rows.forEach((row) => {
        const cols = row.split(',');
        if (!fieldCounts[cols[idxField]]) fieldCounts[cols[idxField]] = 0;
        fieldCounts[cols[idxField]] += 1;
        if (!studentsByField[cols[idxField]]) studentsByField[cols[idxField]] = '';
        studentsByField[cols[idxField]] += studentsByField[cols[idxField]]
          ? `, ${cols[idxFName]}`
          : cols[idxFName];
      });

      allData.numStudents = `Number of students: ${rows.length}\n`;
      allData.studentsList = [];
      for (const key in fieldCounts) {
        if (Object.hasOwnProperty.call(fieldCounts, key)) {
          const count = fieldCounts[key];
          allData.studentsList.push(`Number of students in ${key}: ${count}. List: ${studentsByField[key]}`);
        }
      }
      return resolve(allData);
    });
  });
}

const host = '127.0.0.1';
const pt = 1245;

const svr = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') res.end('Hello Holberton School!');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.write(data.numStudents);
        res.write(data.studentsList.join('\n'));
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  }
});

svr.listen(pt, host);

module.exports = svr;
